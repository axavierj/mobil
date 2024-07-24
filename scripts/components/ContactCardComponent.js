import { deleteContact } from "../../api/contact.js"
import { contactCardTemplate } from "../../templates/contactTemplate.js"
import phoneFormatter from "../../utils/phoneFormater.js"

class ContactCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = contactCardTemplate
  }

  connectedCallback() {
    const editButton = this.querySelectorAll("[data-id=edit]")
    const deleteButton = this.querySelectorAll("[data-id=delete]")
    editButton.forEach((button) => {
      button.addEventListener("click", () => {
        const id = this.dataset.id
        sessionStorage.setItem("contactId", id)
        window.location.href = "contact_edit.html"
      })
    })
    deleteButton.forEach((button) => {
      button.addEventListener("click", async () => {
        const id = this.dataset.id
        await deleteContact(id)
        window.location.reload()
      })
    })
  }

  get name() {
    return this.getAttribute("name")
  }

  set name(value) {
    this.setAttribute("name", value)
  }

  get address() {
    return this.getAttribute("address")
  }

  set address(value) {
    this.setAttribute("address", value)
  }

  get email() {
    return this.getAttribute("email")
  }

  set email(value) {
    this.setAttribute("email", value)
  }

  get phone() {
    return this.getAttribute("phone")
  }

  set phone(value) {
    this.setAttribute("phone", value)
  }

  get additionalInfo() {
    return this.getAttribute("additionalinfo")
  }

  set additionalInfo(value) {
    this.setAttribute("additionalInfo", value)
  }

  static get observedAttributes() {
    return ["name", "address", "email", "phone", "additionalinfo"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "name":
        const title = this.querySelector("#title")
        title.innerHTML = this.name
        break
      case "address":
        const address = this.querySelector("#address")
        address.innerHTML = this.address
        break
      case "email":
        const email = this.querySelector("#email")
        email.innerHTML = this.email
        break
      case "phone":
        const phone = this.querySelector("#phone")
        phone.innerHTML = phoneFormatter(this.phone)
        break
      case "additionalinfo":
        const additionalInfo = this.querySelector("#additionalInfo")
        additionalInfo.innerHTML = this.additionalInfo
        break
    }
  }
}

customElements.define("app-contactcard", ContactCard)
