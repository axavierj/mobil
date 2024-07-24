export const recipesTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Recipes</h2>
    <div class="d-flex gap-2">
      <a class="btn btn-primary" href="recipe_create.html">
        <i class="bi bi-plus-circle"></i>
      </a>
      <a class="btn btn-success" href="index.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
    </div>
  </div>
  <app-recipe-table></app-recipe-table>
</div>
`

export const recipeCreateTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>Create Recipes</h2>
    <a class="btn btn-success" href="recipes.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
  </div>
  <app-recipe-form></app-recipe-form>
</div>
`

export const recipeFormTemplate = `
<form>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" name="title" required>
  </div>
  <fieldset>
    <legend>Ingredients List</legend>
    <button class="btn btn-primary" type="button" id="addingredient">
      <i class="bi bi-plus-circle"></i> Add Ingredient  
    </button>
    <div id="ingredientList">
    
    </div>
  </fieldset>

  <div>
    <label for="instructions" class="form-label mt-4">instructions</label>
    <textarea class="form-control" id="instructions" rows="10" name="instructions"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mt-4">
    <i class="bi bi-save"></i>
  </button>
</form>
`

export const recipeTableTemplate = `
<div class="table-responsive p-2">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
`

export const recipeViewTemplate = `
<div class="container">
  <div class="d-flex justify-content-between p-2">
    <h2>View Recipe</h2>
    <a class="btn btn-success" href="recipes.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
  </div>
  <section class="card" id="recipeCard">
  </section>
</div>
`

export const recipeEditTemplate = `
<div class="container">
 <div class="d-flex justify-content-between p-2">
    <h2>Edit Recipe</h2>
    <a class="btn btn-success" href="recipes.html" >
        <i class="bi bi-house-door-fill"></i>
      </a>
  </div>
  <app-recipe-form mode="edit"></app-recipe-form>
</div>
`
