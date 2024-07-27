import { apiUrl } from "../utils/apiUrl.js"

export const getAllMenus = async () => {
  const response = await fetch(`${apiUrl}api/menus`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
  return await response.json()
}

export const getSingleMenu = async (id) => {
  const response = await fetch(`${apiUrl}api/menus/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
  return await response.json()
}

export const queryMenus = async (query) => {
  const response = await fetch(`${apiUrl}api/menus?${query}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
  return await response.json()
}

export const deleteMenu = async (id) => {
  const response = await fetch(`${apiUrl}api/menus/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "DELETE",
  })
  return response.status
}

export const createMenu = async (menu) => {
  const response = await fetch(`${apiUrl}api/menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(menu),
  })
  return await response.json()
}

export const updateMenu = async ({ id, menu }) => {
  const response = await fetch(`${apiUrl}api/menus/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(menu),
  })
  return await response.json()
}
