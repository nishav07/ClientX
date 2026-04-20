import { useForm } from "react-hook-form";

export default function AddLeadsForm({onSubmit}){
    const {handleSubmit,register}  = useForm();
    return(<div id="AddLeads" className=" flex-1" >

      <form onSubmit={handleSubmit(onSubmit)} className="flex">

        <div id="leftSide" className="w-1/2 m-2  flex flex-col gap-4 ">
           <input type="text" placeholder="enter your Name" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("name",{required:true})} />
            <input type="email" placeholder="enter your email" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("email",{required:true})} />

<input type="tel" placeholder="enter yourphone" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("phone",{required: true})} />

        </div>


        <div id="rightSide" className="w-1/2 m-2 flex flex-col gap-4 ">

        <input type="text" placeholder="enter your source" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("source")} />

         <input type="text" placeholder="intrested product" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("interest")} />


               <button className="h-12 p-2 bg-black text-white rounded-lg">Submit</button>
        </div>

    </form>
    </div>)
}