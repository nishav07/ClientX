import { useLeads } from "../../features/leadContext"
import api from "../../helperFx/api";
import { useToast } from "../../features/ToastContext";
import DashCard from "../../components/DashCard";
import { useEffect,useState } from "react";

export default function Dashboard(){

     let { statusCount} = useLeads();

  useEffect(() => {
    let fetchFilter = async() => {
    //  let res = api.get
    }

    console.log(statusCount)
  },[])

  return (<>
  <div id="dashBoard" className="w-full flex flex-wrap ">

    <DashCard title="closed" body={statusCount}/>
   
  </div>
  </>)
}