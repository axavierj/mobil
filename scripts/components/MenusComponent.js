import { getAllMenus } from "../../api/menu.js"
import { menuTemplate } from "../../templates/menusTemplate.js"

class Menus extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = menuTemplate
    this.table = this.querySelector("menu-table")
  }
  async connectedCallback() {
    await this.loadMenus()
    this.addEventListener("refreshMenu", async (e) => {
      e.preventDefault()
      await this.loadMenus()
    })
  }

  async loadMenus() {
    const menus = await getAllMenus()
    this.table.setAttribute("menu", JSON.stringify(menus))
  }
}

customElements.define("app-menus", Menus)
