// import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/AuthContext";
import { useToast } from "../../features/ToastContext";
import { Link } from "react-router-dom";
import api from "../../helperFx/api.js"; 



export default function Login(){
    const { showToast } = useToast();
    const { setUser } = useAuth();
     const navigate = useNavigate();
      const { register, handleSubmit } = useForm();

    const onSubmit = async(data) => {
    console.log(data);

    try {
        let res = await api.post("/login",data,{
    withCredentials: true
  });
        console.log("response  ",res);
        console.log(res.data)

        

         if(res.data.success == true){
            let {userName,email,userId} = res.data.userData;
        console.log("data login mai jo save ho rha",{userName,email,userId})

            setUser({userName:userName,email:email,userId:userId});
        
            showToast("Login Successful", "success");
            navigate("/dashboard");
        } else {
            showToast("user not found with this cresidentials", "error");
            navigate("/auth/login")
        }
        
    } catch (error) {
         showToast("internal server error", "error");
        console.log("loginn jsx waal er",error);
    }

  
  };


return (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
   
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/5 rounded-full blur-3xl pointer-events-none" />
 
    <div className="relative z-10 w-full max-w-md">
     
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8">
 
      
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-white tracking-tight font-['Sora',sans-serif]">
            Welcome back
          </h1>
          <p className="text-white/40 text-sm mt-2 font-['Sora',sans-serif]">
            Login to your LeadFlow account
          </p>
        </div>
 
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
 
          <div className="flex flex-col gap-1.5">
            <label className="text-white/50 text-xs uppercase tracking-widest font-['Sora',sans-serif]">Username</label>
            <input
              type="text"
              placeholder="your_username"
              {...register("userName")}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-green-400/40 transition-colors font-['Sora',sans-serif] w-full"
            />
          </div>
 
          <div className="flex flex-col gap-1.5">
            <label className="text-white/50 text-xs uppercase tracking-widest font-['Sora',sans-serif]">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-green-400/40 transition-colors font-['Sora',sans-serif] w-full"
            />
          </div>
 
          <button
            type="submit"
            className="mt-2 w-full py-3 bg-green-400 text-black font-bold rounded-xl text-sm hover:bg-green-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-['Sora',sans-serif]"
          >
            Login →
          </button>
        </form>
 
        <p className="text-center text-white/30 text-xs mt-6 font-['Sora',sans-serif]">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-green-400 hover:text-green-300 transition-colors">Sign up free</Link>
        </p>
      </div>
    </div>
  </div>
)

}