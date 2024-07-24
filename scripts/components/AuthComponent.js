import { login } from "../../api/auth.js"
import { authTemplate } from "../../templates/authTemplate.js"

class Auth extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = authTemplate
  }

  connectedCallback() {
    const adminLoginForm = this.querySelector("#admin-login-form")
    adminLoginForm.addEventListener("submit", this.handleAdminLogin)
  }

  async handleAdminLogin(event) {
    event.preventDefault()
    //convert form data to object
    const formData = new FormData(event.target)
    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    })
    const loginResponse = await login(formObject)
    console.log(loginResponse)
  }
}

customElements.define("app-auth", Auth)
