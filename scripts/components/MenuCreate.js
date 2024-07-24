import { createMenu } from "../../api/menu.js"
import { menuCreateTemplate } from "../../templates/menusTemplate.js"

class MenuCreate extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = menuCreateTemplate
    this.menuForm = this.querySelector("form")
  }
  connectedCallback() {
    this.menuForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const data = this.convertFormToObject()
      const items = this.separateItems(data)
      const { title, date, active } = data
      const menu = { title, date, active, items }
      createMenu(menu).then(() => {
        this.menuForm.reset()
        window.location.href = "menus.html"
      })
    })
  }

  convertFormToObject() {
    const formData = new FormData(this.menuForm)
    const data = Object.fromEntries(formData)
    //if the active property is not present, set it to false

    //convert data.date to ISO-8601 DateTime
    data.date = new Date(data.date).toISOString()
    if (!data.active) {
      data.active = false
    }
    if (data.active === "on") {
      data.active = true
    }
    return data
  }

  separateItems(menu) {
    let items = []
    for (const [key, value] of Object.entries(menu)) {
      const splitKey = key.split("-")
      if (splitKey.includes("day")) {
        const day = splitKey[1]
        const description = menu[`description-${day}`]
        items.push({ day, description })
      }
    }
    return items
  }
}

customElements.define("menu-create", MenuCreate)
