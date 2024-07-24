import { getSingleOrder } from "../../api/orders.js"
import { orderSingleTemplate } from "../../templates/orderTemplate.js"

class OrderSingle extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderSingleTemplate
  }

  connectedCallback() {
    const id = sessionStorage.getItem("orderId")
    getSingleOrder(id).then((order) => {
      this.setAttribute("order", JSON.stringify(order))
    })
  }

  //getter for the order property
  get order() {
    return this.getAttribute("order")
  }

  //setter for the order property
  set order(value) {
    this.setAttribute("order", value)
  }

  static get observedAttributes() {
    return ["order"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "order":
        const order = JSON.parse(this.order)
        const card = this.querySelector("#orderCard")
        card.innerHTML = `
          <div class="card-header">
            <h3>Order</h3>
          </div>
          <div class="card-body">
            <p>Client: ${order.client.firstName} ${order.client.lastName}</p>
            <p>Email: ${order.client.email}</p>
            <p>Phone: ${order.client.telephone}</p>
            <p>Paid: ${order.paid}</p>
            <address>
              <p>Address: ${order.client.address}</p>
              <p>City: ${order.client.city}</p>
              <p>State: ${order.client.state}</p>
              <p>Zip: ${order.client.zip}</p>
            </address>
          </div>
          <ul class="list-group list-group-flush">
            ${order.items
              .map(
                (item) => `
              <li class="list-group-item">
                <p>Day: ${item.day}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Type: ${item.type}</p>
              </li>
            `
              )
              .join("")}
          </ul>
        `

        break
      default:
        break
    }
  }
}

customElements.define("view-order", OrderSingle)
