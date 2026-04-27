import { useLeads } from "../../features/leadContext"
import api from "../../helperFx/api";
import { useToast } from "../../features/ToastContext";
import DashCard from "../../components/DashCard";
import { useEffect,useState } from "react";

export default function Dashboard(){
  let [filterData,setFilterData] = useState("");

  useEffect(() => {

  },[])

  return (<>
  <div id="dashBoard" className="w-full flex flex-wrap ">
    <DashCard/>
     <DashCard/>
      <DashCard/>
  </div>
  </>)
}