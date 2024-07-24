import { apiUrl } from "../utils/apiUrl.js"

export const gatAllBatches = async () => {
  const response = await fetch(`${apiUrl}api/batches`)
  return await response.json()
}

export const getSingleBatch = async (id) => {
  const response = await fetch(`${apiUrl}api/batches/${id}`)
  return await response.json()
}

export const deleteBatch = async (id) => {
  const response = await fetch(`${apiUrl}api/batches/${id}`, {
    method: "DELETE",
  })
  return await response.json()
}

export const createBatch = async (batch) => {
  const response = await fetch(`${apiUrl}api/batches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(batch),
  })
  return await response.json()
}

export const updateBatch = async (batch) => {
  const response = await fetch(`${apiUrl}api/batches/${batch.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(batch),
  })
  return await response.json()
}

export const getActiveBatch = async () => {
  const response = await fetch(`${apiUrl}api/batch/active`)

  return await response.json()
}

export const deactivateBatch = async (batch) => {
  batch.active = false
  const response = await fetch(`${apiUrl}api/batch/${batch.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(batch),
  })
  return await response.json()
}
