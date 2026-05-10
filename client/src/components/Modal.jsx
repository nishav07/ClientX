import { useForm } from "react-hook-form";


export default function Modal({onSubmit,setIsOpen}){
     const {handleSubmit,register}  = useForm();

     return(<div id="modal" className="h-auto w-auto mt-4 p-4 bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition">
        <button className="mb-4" onClick={() => setIsOpen(false)}><i className="fa-solid fa-x"></i></button>
        <div id="inputs" className="h-full w-full">
<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
     <input type="text" placeholder="Project Name" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("name",{required:true})} />

<button type="submit" className="h-12 w-auto ml-3 p-2 bg-black text-white rounded-lg">Create key</button>
</form>

        </div>
     </div>)
}