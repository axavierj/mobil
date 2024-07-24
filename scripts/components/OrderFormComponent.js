import { getActiveBatch, updateBatch } from "../../api/batch.js"
import { getContacts } from "../../api/contact.js"
import { createOrder, getSingleOrder, updateOrder } from "../../api/orders.js"
import { orderFormTemplate } from "../../templates/orderTemplate.js"

class OrderForm extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderFormTemplate
  }

  connectedCallback() {
    const form = this.querySelector("form")
    getContacts().then((contacts) => {
      this.client = JSON.stringify(contacts)
    })

    if (this.mode === "edit") {
      //get the order id from the session storage
      const id = sessionStorage.getItem("orderId")
      //get the order data from the server
      getSingleOrder(id).then((order) => {
        this.setAttribute("order", JSON.stringify(order))
      })
    }

    getActiveBatch().then((batch) => {
      this.setAttribute("batch", JSON.stringify(batch))
    })

    form.addEventListener("submit", async (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const order = Object.fromEntries(formData)
      const orderClient = this.retrieveSingleClient(order.client)
      const orderItems = this.createOrderItems(order)
      const batch = JSON.parse(this.batch)

      const orderData = {
        client: orderClient,
        batch,
        items: orderItems,
        status: "pending",
        paid: false,
      }
      let response
      if (this.mode === "edit") {
        //add the order id to the order data
        orderData.id = JSON.parse(this.order).id
        orderData.status = form.status.value
        orderData.paid = form.paid.checked ? true : false
        response = await updateOrder(orderData)
      }
      if (this.mode === "create" || !this.mode) {
        response = await createOrder(orderData)
      }

      window.location.href = "order.html"
    })
  }

  retrieveSingleClient(clientId) {
    return JSON.parse(this.client).find(
      (client) => client.id === Number(clientId)
    )
  }

  createOrderItems(order) {
    const { client, ...orderItems } = order
    let item = []
    let dayArray = ["monday", "tuesday", "wednesday", "thursday", "friday"]

    dayArray = [...new Set(dayArray)]

    dayArray.forEach((day) => {
      const dayItem = {
        day: day,
        quantity: Number(orderItems[`quantity-${day}`]),
        type: orderItems[`type-${day}`],
      }
      if (this.mode === "edit") {
        //get the id from the data-itemId attribute
        dayItem.id = parseInt(
          this.querySelector(`#day-${day}`).getAttribute("data-itemId")
        )
        console.log(dayItem)
      }
      item.push(dayItem)
    })

    return item
  }

  //getter for client attribute
  get client() {
    return this.getAttribute("client")
  }

  //setter for client attribute
  set client(value) {
    this.setAttribute("client", value)
  }

  get mode() {
    return this.getAttribute("mode")
  }

  set mode(value) {
    this.setAttribute("mode", value)
  }

  get order() {
    return this.getAttribute("order")
  }

  set order(value) {
    this.setAttribute("order", value)
  }

  get batch() {
    return this.getAttribute("batch")
  }

  set batch(value) {
    this.setAttribute("batch", value)
  }

  static get observedAttributes() {
    return ["client", "mode", "order", "batch"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "client":
        const clients = JSON.parse(this.client)
        this.querySelector("#client").innerHTML = clients
          .map(
            (client) =>
              `<option value="${client.id}">${client.firstName} ${client.lastName}</option>`
          )
          .join("")
        break
      case "mode":
        if (this.mode === "edit") {
          this.querySelector("#editData").classList.remove("d-none")
        }

        break
      case "order":
        //set the order data to the form
        const order = JSON.parse(this.order)
        const form = this.querySelector("form")
        form.client.value = order.client.id
        order.items.forEach((item) => {
          console.log(item)
          form[`quantity-${item.day}`].value = item.quantity
          form[`type-${item.day}`].value = item.type
          //set a data-itemId attribute to the day-item.day element
          form[`day-${item.day}`].setAttribute("data-itemId", item.id)
        })
        form.status.value = order.status
        form.paid.checked = order.paid
        break
    }
  }
}

customElements.define("app-order-form", OrderForm)
