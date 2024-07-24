import { deleteMenu } from "../../api/menu.js"
import { menuTableTemplate } from "../../templates/menusTemplate.js"

class MenuTable extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = menuTableTemplate
    this.tbody = this.querySelector("tbody")
  }

  //menu getter
  get menu() {
    return this.getAttribute("menu")
  }

  //menu setter
  set menu(value) {
    this.setAttribute("menu", value)
  }

  //menu attribute change
  static get observedAttributes() {
    return ["menu"]
  }

  //menu attribute change callback
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name, newValue)
    }
  }

  render(name, value) {
    switch (name) {
      case "menu":
        this.tbody.innerHTML = JSON.parse(value)
          .map((menu) => {
            //format date to a human readable format
            menu.date = new Date(menu.date).toDateString()

            return `
            <tr>
              <td>${menu.id}</td>
              <td>${menu.title}</td>
              <td>${menu.date}</td>
              <td>${menu.active}</td>
              <td>${menu.items.length}</td>
              <td>
                <button class="btn btn-warning"  data-selector="edit-btn" data-element="menuedit" data-target=${menu.id}>
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-info" data-element="menusingle" data-selector="view-btn" data-target=${menu.id}>
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button class="btn btn-danger" data-target=${menu.id} data-selector="del-btn">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
            `
          })
          .join("")
        const deleteButtons = this.querySelectorAll("[data-selector=del-btn]")
        const viewButtons = this.querySelectorAll("[data-selector=view-btn]")
        const editButtons = this.querySelectorAll("[data-selector=edit-btn]")
        deleteButtons.forEach((button) => {
          button.addEventListener("click", async (event) => {
            const id = event.target.getAttribute("data-target")
            const status = await deleteMenu(id)

            if (status === 204) {
              alert("Menu deleted successfully")
              //refresh the page
              window.location.reload()
            }
          })
        })
        viewButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-target")
            sessionStorage.setItem("menuId", id)
            window.location.href = "menu_single.html"
          })
        })
        editButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-target")
            sessionStorage.setItem("menuId", id)
            window.location.href = "menu_edit.html"
          })
        })
        break
    }
  }
}

customElements.define("menu-table", MenuTable)
