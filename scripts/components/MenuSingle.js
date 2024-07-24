import { getSingleMenu } from "../../api/menu.js"
import { menuSingleTemplate } from "../../templates/menusTemplate.js"

class SingleMenu extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = menuSingleTemplate
    this.active = this.querySelector("#active")
    this.date = this.querySelector("#Date")
  }

  connectedCallback() {
    const id = sessionStorage.getItem("menuId")
    const accordion = this.querySelector("menu-accordion")

    getSingleMenu(id).then((menu) => {
      const title = this.querySelector("#title")
      title.innerHTML = menu.title
      this.active.innerHTML = menu.active
      this.date.innerHTML = menu.date
      accordion.setAttribute("items", JSON.stringify(menu.items))
    })
  }
}

customElements.define("menu-single", SingleMenu)
