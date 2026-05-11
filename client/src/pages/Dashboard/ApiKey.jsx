import { useState } from "react"
import Modal from "../../components/Modal";
import api from "../../helperFx/api";
import { useToast } from "../../features/ToastContext";

export default function ApiKey(){
    const [isOpen,setIsOpen] = useState(false)
    const [apiKey,setApiKey] = useState(null);
    let {showToast} = useToast();



    let onSubmit = async(data) => {
        console.log("data to submit",data);
        const res = await api.post("/getApiKey",{data});
        console.log("res from api",res)

        if(res.data.apiData){
            let raw = res.data.apiData.raw;
            let prefix = res.data.apiData.prefix;
            setApiKey(res.data.apiData);
        }
    }

    let copyApi = () => {
         navigator.clipboard.writeText(apiKey.raw);
         showToast("copied!!","success")
    
    }


//     const fetchLeads = async () => {

//       try {
//         const { data } = await api.get("/dashboard");
//         setLeads(data.leads);
//         console.log("counting data",data.count)
//         setStatusCount(data.count);
//       } catch (err) {
//         console.log("fetch context se err aata hua ",err);
//         setLeads(null);
//         setStatusCount(null)
//       } finally {
//         setLoading2(false);
//       }
//     };


//   useEffect(() => {
//    fetchLeads();
//   }, []);

    return(<div id="apiKey">
        <div>
            <button className="h-12 w-auto p-2 bg-black text-white rounded-lg" onClick={() => setIsOpen(true)}>create Api key</button>
            <div id="modal">
                {isOpen && <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}/>}
            </div>

            {apiKey && 
                <div>
                  <div id="rows" className="h-auto p-4 mt-4 w-full bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition">
                    <h1 className="text-md font-black">{apiKey.keyPrefix},{apiKey.apiName}</h1>

                      <div className="flex items-center justify-center gap-4 shadow-md rounded-xl px-4 py-2 border-2 border-gray-200 ">
                        <h1 className="text-sm">{apiKey.raw}</h1>

                        <button id="copy" onClick={copyApi}><i class="fa-regular fa-copy"></i></button>
                        </div>
                  </div>
                    </div>
            }
        </div>
    </div>)
}