import { deleteRecipe } from "../../api/recipe.js"
import { recipeTableTemplate } from "../../templates/recipesTemplate.js"

class RecipeTable extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = recipeTableTemplate
  }

  connectedCallback() {}

  get recipes() {
    return this.getAttribute("recipes")
  }

  set recipes(value) {
    this.setAttribute("recipes", value)
  }

  static get observedAttributes() {
    return ["recipes"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "recipes":
        const recipes = JSON.parse(this.recipes)
        const table = this.querySelector("tbody")
        table.innerHTML = recipes
          .map((recipe) => {
            return `
          <tr>
            <td>${recipe.id}</td>
            <td>${recipe.title}</td>
            <td>
              <button class="btn btn-primary view-btn"  data-recipeid="${recipe.id}">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-warning edit-btn" data-recipeid="${recipe.id}">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-danger del-btn"  data-recipeid="${recipe.id}">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          `
          })
          .join("")

        const deleteButtons = this.querySelectorAll(".del-btn")
        const viewButtons = this.querySelectorAll(".view-btn")
        const editButtons = this.querySelectorAll(".edit-btn")
        deleteButtons.forEach((button) => {
          button.addEventListener("click", async (event) => {
            const recipeId = event.target.getAttribute("data-recipeid")
            const del = await deleteRecipe(recipeId)
            console.log(del)
            window.location.reload()
          })
        })

        viewButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            const recipeId = event.target.getAttribute("data-recipeid")
            sessionStorage.setItem("recipeId", recipeId)
            window.location.href = "recipe_single.html"
          })
        })

        editButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            const recipeId = event.target.getAttribute("data-recipeid")
            sessionStorage.setItem("recipeId", recipeId)
            window.location.href = "recipe_edit.html"
          })
        })
        break
    }
  }
}
customElements.define("app-recipe-table", RecipeTable)
