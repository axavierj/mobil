import { shellTemplate } from "../../templates/shellTemplate.js"

class AppShell extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = shellTemplate
  }
}

customElements.define("app-shell", AppShell)
