class Link extends HTMLButtonElement {
  constructor() {
    super()
    //get data set
    this.data = this.dataset.element
    this.event = new CustomEvent("navigate", {
      detail: {
        element: this.data,
      },
      bubbles: true,
      composed: true,
    })
  }
  connectedCallback() {
    this.addEventListener("click", () => {
      this.dispatchEvent(this.event)
    })
  }
}

customElements.define("app-link", Link, { extends: "button" })
