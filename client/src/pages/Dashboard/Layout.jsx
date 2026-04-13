import api from "../../helperFx/api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

export default function Layout(){
    let navigate = useNavigate();
    const [user,setUser] = useState(null);

//    useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const { data } = await api.get('/dashboard');
//       console.log("dashboard response:", data)
//       setUser(data.data)
//     } catch(err) {
// console.log("ERROR:", err.response?.status, err.response?.data)
//       navigate('/login')
//     }
//   }

//   fetchUser()
// }, [])


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
    <h1>User Dashboard</h1>
     {user ? (
  <div id="container" className="h-full w-full">
    <Navbar li1="home" li2="analytics" btnTxt="logout"  btnPath="/"/>
  </div>
) : (
  <p>Loading...</p>
)}

    </>)
}