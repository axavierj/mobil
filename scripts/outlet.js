class Outlet extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  //getter for the element
  get element() {
    return this.getAttribute("element")
  }

  //setter for the element
  set element(value) {
    this.setAttribute("element", value)
  }

  static get observedAttributes() {
    return ["element"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render()
    }
  }

  render() {
    this.innerHTML = `<div is="app-${this.element}"></div>`
  }
}

customElements.define("app-outlet", Outlet, { extends: "main" })
