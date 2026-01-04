const API_BASE = '/api'

async function handleResponse(response) {
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong')
  }
  return data
}

export { API_BASE, handleResponse }