import { apiUrl } from "../utils/apiUrl.js"

export const getContacts = async () => {
  const response = await fetch(`${apiUrl}api/contacts`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
  return await response.json()
}

export const getSingleContact = async (id) => {
  const response = await fetch(`${apiUrl}api/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
  return await response.json()
}

export const createContact = async (contact) => {
  const response = await fetch(`${apiUrl}api/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(contact),
  })
  return await response.json()
}

export const updateContact = async (contact) => {
  const response = await fetch(`${apiUrl}api/contacts/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(contact),
  })
  return await response.json()
}

export const deleteContact = async (id) => {
  const response = await fetch(`${apiUrl}api/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "DELETE",
  })
  return await response.json()
}
