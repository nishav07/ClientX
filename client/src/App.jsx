import { useState } from 'react';
import './App.css';
import Landing from './pages/Landing'
import Auth from './features/Auth';
import {Navigate, Route,Routes} from 'react-router-dom';
import Layout from './pages/Dashboard/Layout'; 
import PrivateRoute from "./features/PrivateRoute.jsx" 
import { AuthProvider } from './features/AuthContext.jsx';

function App() {
  
  // let [user,setUser] = useState(null);

  return (
    <>
    <AuthProvider>
    <Routes>
    <Route path='/' element={<Landing/>} />
    {/* //auth ke baad /* lagane se iske aage ka route uske control mai jaat hai */}
    <Route path='/auth/*' element={<Auth/>} /> 
    {/* <Route path='/dashboard' element={user ? <Layout userData={user}/> : <Navigate to="/"/>}/> */}
      <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout/>
            </PrivateRoute>
          }
        />

  </Routes>
  </AuthProvider>
    </>
  )
}

export default App
