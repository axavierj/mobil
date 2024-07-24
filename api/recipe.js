import { apiUrl } from "../utils/apiUrl.js"

export const getAllRecipes = async () => {
  const response = await fetch(`${apiUrl}api/recipes`)
  return await response.json()
}

export const getRecipe = async (id) => {
  const response = await fetch(`${apiUrl}api/recipes/${id}`)
  return await response.json()
}

export const createRecipe = async (recipe) => {
  const response = await fetch(`${apiUrl}api/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  })
  return await response.json()
}

export const updateRecipe = async (id, recipe) => {
  const response = await fetch(`${apiUrl}api/recipes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  })
  return await response.json()
}

export const deleteRecipe = async (id) => {
  const response = await fetch(`${apiUrl}api/recipes/${id}`, {
    method: "DELETE",
  })
  return response
}
