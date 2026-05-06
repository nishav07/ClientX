import EditLeadsForm from "../../components/EditLeadsForm"
import api from "../../helperFx/api";

export default function AddLeads(){

    let onSubmit = async (data) => {
 console.log("data edit Crm" , data);
    }
    return (
        <EditLeadsForm onSubmit={onSubmit} />
    )
}