import { createContext, useContext, useEffect, useState } from "react";
import api from "../helperFx/api.js"; 

const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [statusCount,setStatusCount] = useState();
  const [loading2, setLoading2] = useState(true);


  const fetchLeads = async () => {
      const token = localStorage.getItem('token');

      if(!token){
        setLoading2(false);
        return
      }
      try {
        const { data } = await api.get("/dashboard");
        setLeads(data.leads);
        console.log("counting data",data.count)
        setStatusCount(data.count);
      } catch (err) {
        console.log("fetch context se err aata hua ",err);
        setLeads(null);
        setStatusCount(null)
      } finally {
        setLoading2(false);
      }
    };


  useEffect(() => {
   fetchLeads();
  }, []);

  return (
    <LeadContext.Provider value={{fetchLeads, leads, setLeads, loading2 ,statusCount, setStatusCount}}>
      {children}
    </LeadContext.Provider>
  );
};


export const useLeads = () => useContext(LeadContext);
