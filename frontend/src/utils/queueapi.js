import { API_BASE, handleResponse } from './apiresponse.js'

export const queueApi = {
  get: async () => {
    const response = await fetch(`${API_BASE}/queue`)
    return handleResponse(response)
  },

  enqueue: async (value) => {
    const response = await fetch(`${API_BASE}/queue/enqueue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value }),
    })
    return handleResponse(response)
  },

  dequeue: async () => {
    const response = await fetch(`${API_BASE}/queue/dequeue`, {
      method: 'POST',
    })
    return handleResponse(response)
  },

  peek: async () => {
    const response = await fetch(`${API_BASE}/queue/peek`)
    return handleResponse(response)
  },

  clear: async () => {
    const response = await fetch(`${API_BASE}/queue/clear`, {
      method: 'POST',
    })
    return handleResponse(response)
  },
}
