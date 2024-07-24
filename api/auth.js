import { apiUrl } from "./../utils/apiUrl.js"
export const login = async (data) => {
  try {
    const response = await fetch(`${apiUrl}api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
