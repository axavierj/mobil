import { getAllRecipes } from "../../api/recipe.js"
import { recipesTemplate } from "../../templates/recipesTemplate.js"

class RecipesComponent extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = recipesTemplate
  }

  connectedCallback() {
    getAllRecipes().then((recipes) => {
      const table = this.querySelector("app-recipe-table")

      table.setAttribute("recipes", JSON.stringify(recipes))
    })

    this.addEventListener("refresh", async () => {
      const recipes = await getAllRecipes()
      const table = this.querySelector("app-recipe-table")

      table.setAttribute("recipes", JSON.stringify(recipes))
    })
  }
}

customElements.define("app-recipes", RecipesComponent)
