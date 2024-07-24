import { template } from "../../templates/cardTemplate.js"
class DayCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = template
    this.weekDay = this.querySelector("#day")
  }

  //day getter
  get day() {
    return this.getAttribute("day")
  }

  //day setter
  set day(value) {
    this.setAttribute("day", value)
  }

  get count() {
    return this.getAttribute("count")
  }

  set count(value) {
    this.setAttribute("count", value)
  }

  //day attribute change
  static get observedAttributes() {
    return ["day", "count"]
  }

  //day attribute change callback
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name, newValue)
    }
  }

  render(name, value) {
    switch (name) {
      case "day":
        this.weekDay.innerHTML = value
        break
      case "count":
        const count = JSON.parse(value)
        for (const [key, value] of Object.entries(count)) {
          const day = this.querySelector(`#${key}`)
          if (day) {
            day.innerHTML = value
          }
        }

        break
    }
  }
  disconnectedCallback() {
    console.log("disconnected card")
    //reset the dayCard attributes
    this.day = ""
    this.count = "[]"
  }
}

customElements.define("day-card", DayCard)
