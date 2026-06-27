import Landing from './pages/Landing'
import Auth from './features/Auth';
import {Route,Routes} from 'react-router-dom';
import Layout from './features/Layout.jsx'; 
import PrivateRoute from "./features/PrivateRoute.jsx" 
import { AuthProvider } from './features/AuthContext.jsx';
import { LeadProvider } from './features/leadContext.jsx';
import { ToastProvider } from './features/ToastContext.jsx';

function App() {
  

  return (
    <>
    <ToastProvider>
    <AuthProvider>
    <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/auth/*' element={<Auth/>} /> 
      <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <LeadProvider>
              <Layout/>
              </LeadProvider>
            </PrivateRoute>
          }
        />

  </Routes>
  </AuthProvider>
  </ToastProvider>
    </>
  )
}

export default App
