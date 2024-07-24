import { menuAccordionTemplate } from "../../templates/menusTemplate.js"

class Accordion extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = menuAccordionTemplate
  }

  connectedCallback() {
    const openAll = this.querySelector("#openAll")
    openAll.addEventListener("click", () => {
      const details = this.querySelectorAll("details")
      //if all details are closed, open all
      if (!Array.from(details).some((detail) => detail.open)) {
        this.openAllDetails(details)
        return
      }
      //if all details are open, close all
      if (Array.from(details).every((detail) => detail.open)) {
        this.closeAllDetails(details)
        return
      }
    })
  }

  openAllDetails(details) {
    details.forEach((detail) => {
      detail.open = true
    })
  }

  closeAllDetails(details) {
    details.forEach((detail) => {
      detail.open = false
    })
  }

  //getter for items array
  get items() {
    return this.getAttribute("items")
  }

  //setter for items array
  set items(value) {
    this.setAttribute("items", value)
  }

  //observed attributes
  static get observedAttributes() {
    return ["items"]
  }

  //attribute change callback
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name, newValue)
    }
  }

  render(name, value) {
    switch (name) {
      case "items":
        const items = JSON.parse(value)
        const details = this.querySelectorAll("details")
        details.forEach((detail, index) => {
          detail.querySelector("summary").textContent = items[index].day
          detail.querySelector("p").textContent = items[index].description
        })
        break
    }
  }
}

customElements.define("menu-accordion", Accordion)
