import { useForm } from "react-hook-form";
import api from "../../helperFx/api";
import AddLeadsForm from "../../components/AddLeadsForm";


export default function AddLeads(){

     const onSubmit = async(data) => {
        console.log("data to submit in CRM" , data);

        let res = await api.post("/addLeads",{data:data});
        console.log("res from addleads api",res)
     }

    return(<main className="w-full">
       <AddLeadsForm onSubmit={onSubmit} />
    </main>)
}