import { contactCreateTemplate } from "../../templates/contactTemplate.js"

class ContactCreate extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = contactCreateTemplate
  }

  connectedCallback() {
    const formComponent = this.querySelector("app-contactform")
    formComponent.sendtype = "create"
  }
}

customElements.define("create-contact", ContactCreate)
