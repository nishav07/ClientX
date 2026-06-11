import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Signup(){
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async(data) => {

        console.log("singup wala data",data)
         try {
        let res = await axios.post("http://localhost:8080/signup",data);
        console.log("response  ",res);
        console.log("response  ",res.data.success);
        if(res.data.success == true){
            navigate("/auth/login")
        } else {
            navigate("/")
        }
    } catch (error) {
        console.log(error);
    }
    }
   // ===== SIGNUP - sirf return part replace karo =====

return (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
    {/* background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 w-full max-w-md">
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-white tracking-tight font-['Sora',sans-serif]">
            Create account
          </h1>
          <p className="text-white/40 text-sm mt-2 font-['Sora',sans-serif]">
            Start capturing leads in minutes
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
            <label className="text-white/50 text-xs uppercase tracking-widest font-['Sora',sans-serif]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
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
            Create Account →
          </button>
        </form>

        <p className="text-center text-white/30 text-xs mt-6 font-['Sora',sans-serif]">
          Already have an account?{" "}
           <Link to="/auth/login" className="text-green-400 hover:text-green-300 transition-colors">login here</Link>
        </p>
      </div>
    </div>
  </div>
)
}