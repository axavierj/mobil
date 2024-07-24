import { recipeCreateTemplate } from "../../templates/recipesTemplate.js"

class RecipeCreate extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = recipeCreateTemplate
  }
}

customElements.define("create-recipe", RecipeCreate)
