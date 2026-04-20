import { useForm } from "react-hook-form";

export default function AddLeadsForm({onSubmit}){
    const {handleSubmit,register}  = useForm();
    return(<div id="AddLeads" className=" flex-1" >

      <form onSubmit={handleSubmit(onSubmit)} className="flex">

        <div id="leftSide" className="w-1/2 m-2  flex flex-col gap-4 ">
           <input type="text" placeholder="enter your userName" className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400
" {...register("userName")} />
            <input type="text" placeholder="enter your userName" className="" {...register("userName")} />
        </div>
        <div id="rightSide" className="w-1/2 m-2 bg-teal-300 flex flex-col gap-4 ">
              <input type="password"  placeholder="enter your password" className="" {...register("password")} />
            <input type="text" placeholder="enter your userName" className="" {...register("userName")} />
               <button>Submit</button>
        </div>

    </form>
    </div>)
}