import { getContacts } from "../../api/contact.js"
import { contactTemplate } from "../../templates/contactTemplate.js"

class ContactComponent extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = contactTemplate
  }

  connectedCallback() {
    const contactContainer = this.querySelector("#contact-container")
    getContacts().then((contacts) => {
      contactContainer.innerHTML = contacts
        .map((contact) => {
          return `
          <app-contactcard 
            name="${contact.firstName} ${contact.lastName}" 
            address='${contact.address} ${contact.city}, fl  ${contact.zip}' 
            email="${contact.email}" phone="${contact.telephone}" 
            additionalInfo="${contact.additionalInfo}" data-id="${contact.id}"></app-contactcard>
          `
        })
        .join("")
    })
  }
}

customElements.define("app-contact", ContactComponent)
