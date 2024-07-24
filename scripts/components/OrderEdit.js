import { orderEditTemplate } from "../../templates/orderTemplate.js"

class OrderEdit extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderEditTemplate
  }
}

customElements.define("edit-order", OrderEdit)
