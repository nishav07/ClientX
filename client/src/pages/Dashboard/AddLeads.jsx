import { useForm } from "react-hook-form";
import AddLeadsForm from "../../components/AddLeadsForm";


export default function AddLeads(){

     const onSubmit = async(data) => {
        console.log("data to submit in CRM" , data);
     }

    return(<main className="w-full">
       <AddLeadsForm onSubmit={onSubmit} />
    </main>)
}