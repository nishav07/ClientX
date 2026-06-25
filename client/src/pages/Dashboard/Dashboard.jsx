import { useLeads } from "../../features/leadContext"
import AnalyticsCard from "../../components/AnalyticsCard";

export default function Dashboard(){
     let { leads,loading2,statusCount,srcCount } = useLeads();
     


     if(loading2){
        return <h1>loading....</h1>
    }

  return (<>
  <div id="dashBoard" className="w-full">
    <h1 className="text-3xl">Leads Dashbaord</h1>
    <div id="dashData" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <AnalyticsCard title="website" icon="fa-solid fa-trash-can" value={srcCount.website} change="12.3%"/>
    </div>
  </div>
  </>)
}