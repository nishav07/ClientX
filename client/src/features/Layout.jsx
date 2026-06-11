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
import EditLeads from "../pages/Dashboard/EditLeads";
import ApiKey from "../pages/Dashboard/ApiKey";


export default function Layout(){
    let navigate = useNavigate();
    const [user,setUser] = useState(null);

useEffect(() => {
  
  const fetchUser = async () => {
    try {

      const { data } = await api.get('/dashboard');
      setUser(data.data)
    } catch(err) {
      console.log("ERROR:", err.response?.status, err.response?.data)
      navigate('/auth/login')
    }
  }

  fetchUser()
}, [])
    
    return (<>
     {user ? (
  <div id="container" className="h-screen flex">
    <SideNav/>
    <div id="main" className="flex flex-col flex-1 bg-gray-200 ">
      <Navbar variant="dashboard" username={user.userName} btnTxt="Add Leads" btnPath="/dashboard/add"/>

      <main id="dyanamicContent" className="flex-1 mt-16 overflow-y-scroll bg-gray-200 p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Routes>
            <Route path="/" element={<Navigate to="home" />} /> 
                <Route index path='home' element={<Dashboard/>}  />
                <Route path='customers' element={<Customers/>} />
                <Route path="leads" element={<Leads/>}/>
                 <Route path="add" element={<AddLeads/>}/>
                 <Route path="edit/:id" element={<EditLeads/>}/>
                 <Route path="apiKeys" element={<ApiKey/>}/>
            </Routes>
      </main>
    </div>
  </div>
) : (
  <p>Loading...</p>
)}

    </>)
}