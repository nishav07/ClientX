import EditLeadsForm from "../../components/EditLeadsForm"


export default function AddLeads(){

    let onSubmit = async (data) => {
 console.log("data edit Crm" , data);
    }
    return (
        <EditLeadsForm onSubmit={onSubmit}/>
    )
}