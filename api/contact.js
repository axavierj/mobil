import { apiUrl } from "../utils/apiUrl.js"

export const getContacts = async () => {
  const response = await fetch(`${apiUrl}api/contacts`)
  return await response.json()
}

export const getSingleContact = async (id) => {
  const response = await fetch(`${apiUrl}api/contacts/${id}`)
  return await response.json()
}

export const createContact = async (contact) => {
  const response = await fetch(`${apiUrl}api/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    },
    body: JSON.stringify(contact),
  })
  return await response.json()
}

export const deleteContact = async (id) => {
  const response = await fetch(`${apiUrl}api/contacts/${id}`, {
    method: "DELETE",
  })
  return await response.json()
}
