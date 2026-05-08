import EditLeadsForm from "../../components/EditLeadsForm"
import api from "../../helperFx/api";
import { useParams } from "react-router-dom";
import { useToast } from "../../features/ToastContext";
import { useNavigate } from "react-router-dom";
import { useLeads } from "../../features/leadContext";


export default function AddLeads(){
    const { id } = useParams();
    let{ showToast } = useToast()
    let navigate = useNavigate();

    let {fetchLeads} = useLeads()

    let onSubmit = async (data) => {
     console.log("data edit Crm" , data);
      
     
     try {
        const res = await api.patch(`/editLeads/${id}`,{data:data});
        console.log("res from edit server",res.data);
        
        if(res.data.allGood){
            await fetchLeads();
        navigate("/dashboard/customers");
        showToast("data edited","success")
        } else {
            showToast("data not edited","error")
        }
     } catch (err) {
        console.log(err,"error from jsx")
     }

 
    }

    return (
        <EditLeadsForm onSubmit={onSubmit} />
    )
}