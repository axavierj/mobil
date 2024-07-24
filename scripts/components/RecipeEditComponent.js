import { getRecipe } from "../../api/recipe.js"
import { recipeEditTemplate } from "../../templates/recipesTemplate.js"

class RecipeEdit extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = recipeEditTemplate
  }
  connectedCallback() {
    const id = sessionStorage.getItem("recipeId")
    getRecipe(id).then((recipe) => {
      const form = this.querySelector("app-recipe-form")
      form.setAttribute("recipe", JSON.stringify(recipe))
    })
  }
}

customElements.define("edit-recipe", RecipeEdit)
