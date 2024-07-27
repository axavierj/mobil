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
    sessionStorage.setItem("token", loginResponse.token)
    window.location.href = "/index.html"
  }
}

customElements.define("app-auth", Auth)
