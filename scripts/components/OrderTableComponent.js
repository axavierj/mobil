import { deleteOrder } from "../../api/orders.js"
import { orderTableTemplate } from "../../templates/orderTemplate.js"

class OrderTable extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderTableTemplate
  }

  connectedCallback() {
    console.log("OrderTable connected")
  }

  //getter for the orders property
  get orders() {
    return this.getAttribute("orders")
  }

  //setter for the orders property
  set orders(value) {
    this.setAttribute("orders", value)
  }

  static get observedAttributes() {
    return ["orders"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "orders":
        const orders = JSON.parse(this.orders)
        const table = this.querySelector("tbody")
        table.innerHTML = orders
          .map((order) => {
            return `
            <tr>
              <td>${order.id}</td>
              <td>${order.client.firstName}</td>
              <td>${order.items.length}</td>
              <td>${order.paid}</td>
              <td>${order.status}</td>
              <td>
                <button class="btn btn-warning"  data-selector="edit-btn" data-target=${order.id}>
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-info" data-selector="view-btn" data-target=${order.id}>
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button class="btn btn-danger" data-target=${order.id} data-selector="del-btn">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          `
          })
          .join("")

        const deleteButtons = this.querySelectorAll("[data-selector=del-btn]")
        const viewButtons = this.querySelectorAll("[data-selector=view-btn]")
        const editButtons = this.querySelectorAll("[data-selector=edit-btn]")
        //add event listeners to the delete buttons
        deleteButtons.forEach((button) => {
          button.addEventListener("click", async (event) => {
            const id = event.target.getAttribute("data-target")
            const del = confirm(`Delete order with id: ${id}`)
            if (del) {
              await deleteOrder(id)
              //refresh the page
              window.location.reload()
            }
          })
        })

        //add event listeners to the view buttons
        viewButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-target")
            sessionStorage.setItem("orderId", id)
            //send the navigation event
            window.location.href = "order_single.html"
          })
        })

        //add event listeners to the edit buttons
        editButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-target")
            sessionStorage.setItem("orderId", id)
            window.location.href = "order_edit.html"
          })
        })
        break
    }
  }
}

customElements.define("app-order-table", OrderTable)
