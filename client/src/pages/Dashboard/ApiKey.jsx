import { useState } from "react"
import Modal from "../../components/Modal";
import api from "../../helperFx/api";
import { useToast } from "../../features/ToastContext";
import { useEffect } from "react";

export default function ApiKey(){
    const [isOpen,setIsOpen] = useState(false)
    const [apiKey,setApiKey] = useState(null);
    const [allKey,setAllKey] = useState(null)
    let {showToast} = useToast();



    let onSubmit = async(data) => {
        console.log("data to submit",data);
        const res = await api.post("/getApiKey",{data});
        console.log("res from api",res)

        if(res.data.apiData){
            let raw = res.data.apiData.raw;
            let prefix = res.data.apiData.prefix;
            setApiKey(res.data.apiData);
            fetchKeys();
        }
    }

    let copyApi = () => {
         navigator.clipboard.writeText(apiKey.raw);
         showToast("copied!!","success")
    
    }


    const fetchKeys = async () => {

      try {
        const { data } = await api.get("/apiKeys");
        setAllKey(data.keys);
        console.log("data from backend for apikeys",data)
      } catch (err) {
        console.log("fetch context se err aata hua ",err);
        setAllKey(null);
      } 
    }


        useEffect(() => {
        fetchKeys();
        }, []);


        let deleteApi = async(id) => {
          console.log("id",id);
          try {
            let res = await api.delete(`/deleteApiKey/${id}`);
          console.log("res from del route",res);
           if(res.data.deleted){
            fetchKeys();
            showToast("api deleted succesfully","success")
           } else {
            showToast("api not deleted","error")
           }
          } catch (error) {
              showToast("api not deleted","error")
              console.log("errror",error)
          }
        }

    return(<div id="apiKey">
        <div>

            { allKey && <div>{allKey.map((key) =>(
              <div className="grid grid-cols-3 gap-4 p-4 mt-2 bg-white shadow-md rounded-2xl p-5 border border-gray-200 flex" key={key.id}>
                <div id="keyDetails">
                  <p className="text-sm font-black">project Name : {key.apiName}</p>
                  <p>preifx : {key.keyPrefix}</p>
                </div>

                <div id="apiDetails">
                  {key.isActive && <p className="text-green-700 font-medium">active</p>}
                </div>

                <div className="flex items-center justify-center text-2xl">
            <i className="fa-solid fa-trash-can text-red-500" onClick={() => deleteApi(key.id)}></i>
          </div>

              </div>
            ) )}</div>}


            <button className="h-12 w-auto p-2 bg-black text-white rounded-lg" onClick={() => setIsOpen(true)}>create Api key</button>
            <div id="modal">
                {isOpen && <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}/>}
            </div>

            {apiKey && 
                <div>
                  <div id="rows" className="h-auto mt-4 w-full bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition">
                    <h1 className="text-md font-black">{apiKey.keyPrefix},{apiKey.apiName}</h1>

                      <div className="flex items-center justify-center gap-4 shadow-md rounded-xl px-4 py-2 border-2 border-gray-200 ">
                        <h1 className="text-sm">{apiKey.raw}</h1>

                        <button id="copy" onClick={copyApi}><i className="fa-regular fa-copy"></i></button>
                        </div>
                  </div>
                    </div>
            }
        </div>
    </div>)
}