import { getAllOrders } from "../../api/orders.js"
import { orderTemplate } from "../../templates/orderTemplate.js"

class OrderComponent extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderTemplate
  }
  async connectedCallback() {
    await this.load()
  }

  async load() {
    const orders = await getAllOrders()
    const table = this.querySelector("app-order-table")
    table.setAttribute("orders", JSON.stringify(orders))
  }
}

customElements.define("app-order", OrderComponent)
