import { useForm } from "react-hook-form";
import api from "../../helperFx/api";
import AddLeadsForm from "../../components/AddLeadsForm";
import { useNavigate } from "react-router-dom";

export default function AddLeads(){
   let navigate = useNavigate();

     const onSubmit = async(data) => {
        console.log("data to submit in CRM" , data);

      try {
        let res = await api.post("/addLeads",{data:data});
        console.log("res from addleads api",res);
       if(res.data.added){
          navigate("/dashboard");
       } else {
          navigate("/dashboard/leads");
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