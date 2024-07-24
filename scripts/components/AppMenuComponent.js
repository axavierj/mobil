import { appMenuTemplate } from "../../templates/shellTemplate.js"

class AppMenu extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = appMenuTemplate
  }
}

customElements.define("app-menu", AppMenu)
