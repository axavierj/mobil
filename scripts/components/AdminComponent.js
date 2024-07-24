import { createBatch, getActiveBatch } from "../../api/batch.js"
import { admin as template } from "../../templates/adminTemplate.js"
import counter from "../../utils/counter.js"

class Admin extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = template
    this.counted = {}
  }
  connectedCallback() {
    getActiveBatch().then((batch) => {
      this.setAttribute("batch", JSON.stringify(batch))
    })

    const createBatchButton = this.querySelector("#createBatch")
    createBatchButton.addEventListener("click", () => {
      const startDate = new Date()
      const endDate = new Date(startDate)
      endDate.setDate(endDate.getDate() + 6)
      const batch = { startDate, endDate, active: true }
      createBatch(batch).then((batch) => {
        this.setAttribute("batch", JSON.stringify(batch))
        //reload the page
        location.reload()
      })
    })
  }

  get batch() {
    return this.getAttribute("batch")
  }

  set batch(value) {
    this.setAttribute("batch", value)
  }

  static get observedAttributes() {
    return ["batch"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "batch":
        const dayCards = this.querySelectorAll("day-card")
        const batch = JSON.parse(this.batch)
        if (batch.orders && batch.orders.length > 0) {
          this.counted = this.separate(batch)
          dayCards.forEach((dayCard) => {
            const day = dayCard.getAttribute("day").toLowerCase()
            dayCard.setAttribute("count", JSON.stringify(this.counted[day]))
          })
        }

        break
    }
  }

  separate({ orders }) {
    const dayCounter = { ...counter }
    orders.forEach((order) => {
      order.items.forEach((item) => {
        const day = item.day
        const type = item.type
        const quantity = item.quantity

        if (!dayCounter[day]) {
          dayCounter[day] = {}
        }

        if (!dayCounter[day][type]) {
          dayCounter[day][type] = 0
        }

        dayCounter[day][type] += quantity
      })
    })
    return dayCounter
  }
  disconnectedCallback() {
    alert(JSON.parse(this.batch).id)
    this.batch = ""
    this.counted = {}
  }
}

customElements.define("app-admin", Admin)
