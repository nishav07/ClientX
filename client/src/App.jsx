import { useState } from 'react';
import './App.css';
import Landing from './pages/Landing'
import Auth from './features/Auth';
import {Route,Routes} from 'react-router-dom';  

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Landing/>} />
    {/* //auth ke baad /* lagane se iske aage ka route uske control mami jaat hai */}
    <Route path='/auth/*' element={<Auth/>} /> 
  </Routes>
    </>
  )
}

export default App
