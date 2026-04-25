import { useState } from 'react';
import './App.css';
import Landing from './pages/Landing'
import Auth from './features/Auth';
import {Navigate, Route,Routes} from 'react-router-dom';
import Layout from './features/Layout.jsx'; 
import PrivateRoute from "./features/PrivateRoute.jsx" 
import { AuthProvider } from './features/AuthContext.jsx';
import { LeadProvider } from './features/leadContext.jsx';
import { ToastProvider } from './features/ToastContext.jsx';

function App() {
  
  // let [user,setUser] = useState(null);

  return (
    <>
    <ToastProvider>
    <AuthProvider>
    <Routes>
    <Route path='/' element={<Landing/>} />
    {/* //auth ke baad /* lagane se iske aage ka route uske control mai jaat hai */}
    <Route path='/auth/*' element={<Auth/>} /> 
    {/* <Route path='/dashboard' element={user ? <Layout userData={user}/> : <Navigate to="/"/>}/> */}
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
