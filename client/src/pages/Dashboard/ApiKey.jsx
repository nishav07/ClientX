import { useState } from "react"
import Modal from "../../components/Modal";
import api from "../../helperFx/api";
export default function ApiKey(){
    const [isOpen,setIsOpen] = useState(false)
    const [apiKey,setApiKey] = useState();

    let onSubmit = async(data) => {
        console.log("data to submit",data)

    }

    return(<div id="apiKey">
        <div>
            <button className="h-12 w-auto p-2 bg-black text-white rounded-lg" onClick={() => setIsOpen(true)}>create Api key</button>
            <div id="modal">
                {isOpen && <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}/>}
            </div>
        </div>
    </div>)
}