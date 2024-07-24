import { getRecipe } from "../../api/recipe.js"
import { recipeViewTemplate } from "../../templates/recipesTemplate.js"

class RecipeSingle extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = recipeViewTemplate
  }
  connectedCallback() {
    const id = sessionStorage.getItem("recipeId")
    getRecipe(id).then((recipe) => {
      this.setAttribute("recipe", JSON.stringify(recipe))
    })
  }

  get recipe() {
    return this.getAttribute("recipe")
  }

  set recipe(value) {
    this.setAttribute("recipe", value)
  }

  static get observedAttributes() {
    return ["recipe"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "recipe":
        const recipe = JSON.parse(this.recipe)
        const card = this.querySelector("#recipeCard")
        card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <div class="card-header">
            <h6>Ingredients</h6>
          </div>
          <ul class="list-group list-group-flush">
            ${recipe.ingredients
              .map((ingredient) => {
                return `
              <li class="list-group-item">
                <span class="fw-bold">${ingredient.name}</span>
                <span class="fw-bold">${ingredient.quantity}</span>
                <span class="fw-bold">${ingredient.unit}</span>
              </li>
              `
              })
              .join("")}
          </ul>
          <div class="card-body">
            <div class="card-header">
              <h6>Instructions</h6>
            </div>
            <p class="card-text">${recipe.instructions}</p>
          </div>
        </div>
        `
        break
    }
  }
}

customElements.define("view-recipe", RecipeSingle)
