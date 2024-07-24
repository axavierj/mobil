import { createRecipe } from "../../api/recipe.js"
import { recipeFormTemplate } from "../../templates/recipesTemplate.js"

class RecipeForm extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = recipeFormTemplate
  }

  connectedCallback() {
    const ingredientList = this.querySelector("#addingredient")
    const form = this.querySelector("form")
    let ingredientCount = 0

    console.log(this.recipe)

    ingredientList.addEventListener("click", (e) => {
      e.preventDefault()
      const ingredientList = this.querySelector("#ingredientList")
      const ingtemp = `
      <section class="d-flex flex-wrap gap-2 align-items-center" data-index='${ingredientCount}'>
        <div class="mb-3">
          <label for="ingredient-name-${ingredientCount}" class="form-label">Ingredient</label>
          <input type="text" class="form-control" id="ingredient-name-${ingredientCount}" name="ingredient-name-${ingredientCount}" required autocomplete="off">
        </div>
        <div class="mb-3">
          <label for="ingredient-quantity-${ingredientCount}" class="form-label">Quantity</label>
          <input type="number" class="form-control" id="ingredient-quantity-${ingredientCount}" name="ingredient-quantity-${ingredientCount}" required min="0" autocomplete="off">
        </div>
        <div class="mb-3">
          <label for="ingredient-unit-${ingredientCount}" class="form-label">Unit</label>
          <input type="text" class="form-control" id="ingredient-unit-${ingredientCount}" name="ingredient-unit-${ingredientCount}" required autocomplete="off">
        </div>
        <div>
          <button class="btn btn-danger del-btn" type="button" id="remove-ingredeant-${ingredientCount}" data-index='${ingredientCount}' >
            <i class="bi bi-x-circle"></i> Remove Ingredient
          </button>
        </div>
      </section>
      `
      ingredientList.appendChild(
        new DOMParser().parseFromString(ingtemp, "text/html").body.firstChild
      )
      ingredientCount = ingredientCount + 1

      const removeIngredient = this.querySelectorAll(".del-btn")
      removeIngredient.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault()
          const index = e.target.dataset.index
          const ingredient = this.querySelector(`[data-index='${index}']`)
          ingredient.remove()
        })
      })
    })

    form.addEventListener("submit", async (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const formObj = Object.fromEntries(formData)
      let ingredients = []

      Object.keys(formObj).forEach((key) => {
        if (key.includes("ingredient-name")) {
          const index = key.split("-").pop()
          const ingredient = {
            name: formObj[`ingredient-name-${index}`],
            quantity: formObj[`ingredient-quantity-${index}`],
            unit: formObj[`ingredient-unit-${index}`],
          }
          ingredients.push(ingredient)
        }
      })
      const recipe = {
        title: formObj.title,
        instructions: formObj.instructions,
        ingredients: ingredients,
        image: "",
      }

      const response = await createRecipe(recipe)
      if (response) {
        form.reset()
        const ingredientList = this.querySelector("#ingredientList")
        ingredientList.innerHTML = ""
        ingredientCount = 0
        //send navigate event to navigate to recipes page
        window.location.href = "recipes.html"
      }
    })
  }

  get mode() {
    return this.getAttribute("mode")
  }

  set mode(value) {
    this.setAttribute("mode", value)
  }

  get recipe() {
    return this.getAttribute("recipe")
  }

  set recipe(value) {
    this.setAttribute("recipe", value)
  }

  static get observedAttributes() {
    return ["mode"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render(name)
    }
  }

  render(name) {
    switch (name) {
      case "mode":
        if (this.mode === "edit") {
          const recipe = JSON.parse(this.recipe)
          const form = this.querySelector("form")
        }
        break
    }
  }
}

customElements.define("app-recipe-form", RecipeForm)
