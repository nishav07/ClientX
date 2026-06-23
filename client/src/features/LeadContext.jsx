import { createContext, useContext, useEffect, useState } from "react";
import api from "../helperFx/api.js"; 

const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [statusCount,setStatusCount] = useState();
   const [srcCount,setSrcCount] = useState({});
  const [loading2, setLoading2] = useState(true);


  const fetchLeads = async () => {

      try {
        const { data } = await api.get("/dashboard");
        console.log("data from back",data)
        setLeads(data.leads);
        setStatusCount(data.count);
        setSrcCount(data.sameSrc);
        console.log("src state",srcCount)
      } catch (err) {
        console.log("fetch context se err aata hua ",err);
        setLeads([]);//kabhi bhi null mt dala kr use empty obj,arr
        setStatusCount(null)
      } finally {
        setLoading2(false);
      }
    };


  useEffect(() => {
   fetchLeads();
  }, []);



  return (
    <LeadContext.Provider value={{fetchLeads, leads, setLeads, loading2 ,statusCount, setStatusCount,srcCount}}>
      {children}
    </LeadContext.Provider>
  );
};


export const useLeads = () => useContext(LeadContext);
