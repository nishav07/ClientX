import { useForm } from "react-hook-form";
import api from "../../helperFx/api";
import AddLeadsForm from "../../components/AddLeadsForm";
import { useNavigate } from "react-router-dom";
import { useLeads } from "../../features/leadContext";
import { useToast } from "../../features/ToastContext";

export default function AddLeads(){
   let navigate = useNavigate();
    let { leads, loading2, setLeads,fetchLeads} = useLeads();
    let {showToast} = useToast();

     const onSubmit = async(data) => {
        console.log("data to submit in CRM" , data);

      try {
        let res = await api.post("/addLeads",{data:data});
        console.log("res from addleads api",res,leads);
       if(res.data.added){
         await fetchLeads();
         showToast("new lead added","success")
          navigate("/dashboard/customers");
       } else {
          navigate("/dashboard/leads");
           showToast("lead not added","error")
       }
       

      } catch (err) {
         console.log(err);
         navigate("/");
      }
     }

    return(<main className="w-full">
       <AddLeadsForm onSubmit={onSubmit} />
    </main>)
}