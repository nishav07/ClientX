import { useLeads } from "../../features/leadContext"
import api from "../../helperFx/api";
import { useToast } from "../../features/ToastContext";
import DashCard from "../../components/DashCard";
import { useEffect,useState } from "react";

export default function Dashboard(){

     let { leads,loading2,statusCount } = useLeads();
     
     console.log("lol",leads,statusCount);

     if(loading2){
        return <h1>loding....</h1>
    }

  return (<>
  <div id="dashBoard" className="w-full flex flex-wrap ">
    <DashCard title="Closed" body={statusCount.closed} />
    <DashCard title="qualified" body={statusCount.qualified}/>
   
  </div>
  </>)
}