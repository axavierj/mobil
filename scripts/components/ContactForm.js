import { createContact, updateContact } from "../../api/contact.js"
import { contactFormTemplate } from "../../templates/contactTemplate.js"

class ContactForm extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = contactFormTemplate
  }

  connectedCallback() {
    this.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const contact = Object.fromEntries(formData)
      if (this.sendtype === "edit") {
        contact.id = sessionStorage.getItem("contactId")
        await updateContact(contact)
      }

      if (this.sendtype === "create") {
        await createContact(contact)
      }
      window.location.href = "contact.html"
    })
  }

  //getter sendtype
  get sendtype() {
    return this.getAttribute("sendtype")
  }

  //setter sendtype
  set sendtype(value) {
    this.setAttribute("sendtype", value)
  }

  static get observedAttributes() {
    return ["sendtype"]
  }
}

customElements.define("app-contactform", ContactForm)
