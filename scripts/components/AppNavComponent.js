import { appNavTemplate } from "../../templates/shellTemplate.js"

class AppNav extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = appNavTemplate
  }
}

customElements.define("app-nav", AppNav)
