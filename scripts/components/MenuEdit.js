import { getSingleMenu, updateMenu } from "../../api/menu.js"
import { menuCreateTemplate } from "../../templates/menusTemplate.js"

class MenuEdit extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = menuCreateTemplate
  }

  connectedCallback() {
    const header = this.querySelector("h2")
    const title = this.querySelector("#title")
    const date = this.querySelector("#date")
    const activeSwitch = this.querySelector("#activeSwitch")
    const formControls = this.querySelectorAll(".form-control")
    const form = this.querySelector("form")
    header.innerHTML = "Edit Menu"
    const id = sessionStorage.getItem("menuId")
    getSingleMenu(id).then((menu) => {
      title.value = menu.title
      const dateArray = menu.date.split("-")
      const year = dateArray[0]
      const month = dateArray[1]
      const day = dateArray[2].split("T")[0]
      date.value = `${year}-${month}-${day}`
      activeSwitch.checked = menu.active
      formControls.forEach((control) => {
        const id = control.id
        const idArray = id.split("-")
        const [prop, day] = idArray
        let item
        if (day) {
          item = menu.items.find((item) => item.day === day)
          control.setAttribute("data-itemid", item.id)
        }
        if (prop === "description") {
          control.value = item.description
          //set the data-itemid attribute to the item id
        }
      })
    })
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const data = this.convertFormToObject(form)
      const items = this.separateItems(data)
      const { title, date, active } = data
      //convert date to iso 8601 format

      const menu = { title, date: new Date(date).toISOString(), active, items }
      updateMenu({ id, menu }).then(() => {
        window.location.href = "menus.html"
      })
    })
  }

  convertFormToObject(menuForm) {
    const formData = new FormData(menuForm)
    const data = Object.fromEntries(formData)
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
        //get the item id from the data-itemid attribute of the input
        const id = document.querySelector(`#${key}`)

        const day = splitKey[1]
        const description = menu[`description-${day}`]
        items.push({ id: id.dataset.itemid, day, description })
      }
    }
    return items
  }
}

customElements.define("menu-edit", MenuEdit)
