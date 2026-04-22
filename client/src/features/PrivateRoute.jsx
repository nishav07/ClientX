import { Navigate } from 'react-router-dom'
import { isTokenValid } from '../helperFx/auth.js' 

export default function PrivateRoute({ children }) {
  return isTokenValid() ? children : <Navigate to="/auth/login" replace />
}