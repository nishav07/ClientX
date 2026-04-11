export const getToken = () => localStorage.getItem('token')
export const removeToken = () => localStorage.removeItem('token')

export const isTokenValid = () => {
  const token = getToken()
  if (!token) return false

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    

    const isExpired = payload.exp * 1000 < Date.now()
    
    if (isExpired) {
      removeToken()  
      return false
    }
    
    return true
  } catch {
    removeToken()
    return false
  }
}