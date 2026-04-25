import { useLeads } from "../../features/leadContext"
import api from "../../helperFx/api";
import { useToast } from "../../features/ToastContext";

export default function Customers(){
    let { leads, loading2, setLeads} = useLeads();
    let { showToast } = useToast();

  const handleStatusChange = async (leadId, newStatus) => {

    try {

      let res = await api.put(`/statusUpdate/${leadId}`, {
        status: newStatus,
      });


      console.log("res for lead updataion",res.data.updated)
     
    if(res.data.updated){
        const updatedLeads = leads.map((lead) =>
        lead.id === leadId
          ? { ...lead, status: newStatus }
          : lead
      );

      showToast("status updated","info")
      setLeads(updatedLeads);
    } else {
      showToast("status not updated","error")
    }

    } catch (err) {
      console.log(err);
    }
  };


    if(loading2){
        return <h1>loding....</h1>
    }
    return(<>
    <main id="customers">

        <div className="flex flex-col gap-4 p-4">

      {leads.map((lead) => (

        <div
          key={lead.id}
          className="grid grid-cols-4 gap-4 bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition"
        >

          <div>
            <p className="text-xs text-gray-500">Name</p>
            <h2 className="font-semibold text-lg">{lead.name}</h2>
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm break-words">{lead.email}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p>{lead.phone}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Source</p>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
              {lead.source}
            </span>
          </div>

          <div>
            <p className="text-xs text-gray-500">Interest</p>
            <p>{lead.interest}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Status</p>

            <select
              value={lead.status}
              onChange={(e) =>
                handleStatusChange(lead.id, e.target.value)
              }
              className="border rounded-lg px-3 py-2 outline-none"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="closed">Closed</option>
            </select>

          </div>

          <div>
            <p className="text-xs text-gray-500">User ID</p>
            <p>{lead.userId}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Created</p>
            <p>
              {new Date(lead.created_at).toLocaleDateString()}
            </p>
          </div>

        </div>

      ))}

    </div>

    </main>
    </>)
}