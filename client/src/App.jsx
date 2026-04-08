import { useState } from 'react';
import './App.css';
import Landing from './pages/Landing'
import Auth from './features/Auth';
import {Navigate, Route,Routes} from 'react-router-dom';
import Layout from './pages/Dashboard/Layout';  

function App() {
  
  let [user,setUser] = useState(null);

  return (
    <>
    <Routes>
    <Route path='/' element={<Landing/>} />
    {/* //auth ke baad /* lagane se iske aage ka route uske control mami jaat hai */}
    <Route path='/auth/*' element={<Auth setUser={setUser}/>} /> 
    <Route path='/dashboard' element={user ? <Layout userData={user}/> : <Navigate to="/"/>}/>

  </Routes>
    </>
  )
}

export default App
