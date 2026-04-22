import { createContext, useContext, useEffect, useState } from "react";
import api from "../helperFx/api.js"; 

const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const token = localStorage.getItem('token');

      if(!token){
        setLoading2(false);
        return
      }
      try {
        const { data } = await api.get("/dashboard");
        setLeads(data.leads);
      } catch (err) {
        console.log("fetch context se err aata hua ",err);
        setLeads(null);
      } finally {
        setLoading2(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <LeadContext.Provider value={{ leads, setLeads, loading2 }}>
      {children}
    </LeadContext.Provider>
  );
};

// custom hook
export const useLeads = () => useContext(LeadContext);
