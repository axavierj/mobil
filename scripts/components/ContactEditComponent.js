import { getSingleContact } from "../../api/contact.js"
import { contactEditTemplate } from "../../templates/contactTemplate.js"

class ContactEdit extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = contactEditTemplate
  }
  connectedCallback() {
    const contactId = sessionStorage.getItem("contactId")
    getSingleContact(contactId).then((contact) => {
      const formComponent = this.querySelector("app-contactform")
      formComponent.sendtype = "edit"
      const form = formComponent.querySelector("form")
      form.firstName.value = contact.firstName
      form.lastName.value = contact.lastName
      form.address.value = contact.address
      form.city.value = contact.city
      form.state.value = contact.state
      form.zip.value = contact.zip
      form.telephone.value = contact.telephone
      form.email.value = contact.email
      form.additionalInfo.value = contact.additionalInfo
    })
  }
}

customElements.define("contact-edit", ContactEdit)
