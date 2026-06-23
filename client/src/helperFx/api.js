import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
    withCredentials: true
})

api.interceptors.response.use(
  (response) => response,   
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
    
      if (window.location.pathname !== '/auth/login') {
        window.location.href = '/auth/login'
      }

    }
    return Promise.reject(error)
  }
)

export default api