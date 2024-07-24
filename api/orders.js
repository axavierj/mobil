import { apiUrl } from "../utils/apiUrl.js"

export const getAllOrders = async () => {
  const response = await fetch(`${apiUrl}api/orders`)
  return response.json()
}

export const getSingleOrder = async (id) => {
  const response = await fetch(`${apiUrl}api/orders/${id}`)
  return response.json()
}

export const deleteOrder = async (id) => {
  const response = await fetch(`${apiUrl}api/orders/${id}`, {
    method: "DELETE",
  })
  return response.json()
}

export const createOrder = async (order) => {
  const response = await fetch(`${apiUrl}api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
  return response.json()
}

export const updateOrder = async (order) => {
  const response = await fetch(`${apiUrl}api/orders/${order.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
  return response.json()
}
