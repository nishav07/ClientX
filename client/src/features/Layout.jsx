import api from "../helperFx/api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import {Route,Routes,Link} from 'react-router-dom'; 
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Dashboard/Customers";
import Leads from "../pages/Dashboard/Leads";
import { Navigate } from "react-router-dom";
import AddLeads from "../pages/Dashboard/AddLeads";


export default function Layout(){
    let navigate = useNavigate();
    const [user,setUser] = useState(null);

useEffect(() => {
  
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log("token fetch krne se pehle",token)
      const { data } = await axios.get('http://localhost:8080/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log("dashboard response:", data)
      setUser(data.data)
    } catch(err) {
      console.log("ERROR:", err.response?.status, err.response?.data)
      navigate('/login')
    }
  }

  fetchUser()
}, [])
    
    return (<>
    {/* <h1>User Dashboard</h1> */}
     {user ? (
  <div id="container" className="h-screen flex">
    <SideNav/>
    <div id="main" className="flex flex-col flex-1 bg-gray-200">
      <Navbar btnTxt="Add Leads" btnPath="/dashboard/add"/>

      <main id="dyanamicContent" className="flex-1 overflow-auto-scroll bg-gray-100 p-4">
        <Routes>
            <Route path="/" element={<Navigate to="home" />} /> 
                <Route index path='home' element={<Dashboard/>}  />
                <Route path='customers' element={<Customers/>} />
                <Route path="leads" element={<Leads/>}/>
                 <Route path="add" element={<AddLeads/>}/>
            </Routes>
      </main>
    </div>
  </div>
) : (
  <p>Loading...</p>
)}

    </>)
}