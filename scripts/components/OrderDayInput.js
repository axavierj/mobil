import { orderDayInputTemplate } from "../../templates/orderTemplate.js"

class OrderDayInput extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = orderDayInputTemplate
  }

  connectedCallback() {
    const upButton = this.querySelector("button[aria-label='up']")
    const downButton = this.querySelector("button[aria-label='down']")
    const quantity = this.querySelector(
      `input[name='quantity-${this.day.toLowerCase()}']`
    )

    upButton.addEventListener("click", (e) => {
      e.preventDefault()
      quantity.stepUp()
    })

    downButton.addEventListener("click", (e) => {
      e.preventDefault()
      quantity.stepDown()
    })
  }

  //getter for day attribute
  get day() {
    return this.getAttribute("day")
  }

  //setter for day attribute
  set day(value) {
    this.setAttribute("day", value)
  }

  static get observedAttributes() {
    return ["day"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "day":
        const dayInput = this.querySelector("[data-dayId='day']")
        const quantityInput = this.querySelector("[data-quantityid='quantity']")
        const orderType = this.querySelector("[data-typeid='type']")
        dayInput.value = this.day
        dayInput.setAttribute("id", `day-${this.day.toLowerCase()}`)
        dayInput.setAttribute("name", `day-${this.day.toLowerCase()}`)
        quantityInput.setAttribute("id", `quantity-${this.day.toLowerCase()}`)
        quantityInput.setAttribute("name", `quantity-${this.day.toLowerCase()}`)
        orderType.setAttribute("id", `type-${this.day.toLowerCase()}`)
        orderType.setAttribute("name", `type-${this.day.toLowerCase()}`)
        break
    }
  }
}

customElements.define("app-order-day-input", OrderDayInput)
