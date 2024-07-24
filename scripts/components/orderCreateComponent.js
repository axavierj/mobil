import { orderCreateTemplate } from "../../templates/orderTemplate.js"

class OrderCreate extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderCreateTemplate
  }
}

customElements.define("create-order", OrderCreate)
