// import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/AuthContext";



export default function Login(){
    const { setUser } = useAuth();
     const navigate = useNavigate();
      const { register, handleSubmit } = useForm();

    const onSubmit = async(data) => {
    console.log(data);

    try {
        let res = await axios.post("http://localhost:8080/login",data);
        console.log("response  ",res);
        console.log(res.data)

        let {userName,email,userId} = res.data.userData;

        console.log("data login mai jo save ho rha",{userName,email,userId})

         if(res.data.success == true){
            setUser({userName:userName,email:email,userId:userId});
            console.log("token save krte time",res.data.token)
            localStorage.setItem("token",res.data.token)
            navigate("/dashboard");
        } else {
            navigate("/")
        }
        
    } catch (error) {
        console.log("loginn jsx waal er",error);
    }

   
    // fetch("http://localhost:8080/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  };

    // let [form,setForm] = useState({
    //     userName:"",password:""
    // })

    // let inputHandler = (e) => {
    //     let currName = e.target.name;
    //     let currVal = e.target.value;

    //     setForm((currData) => {
    //         currData[currName] = currVal;
    //         return {...currData};
    //     })

    // }

     return(<>
    <h1 className="text-5xl font-bold text-blue-500">Login box</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="enter your userName" {...register("userName")} />
        <input type="password"  placeholder="enter your password" {...register("password")} />
        <button>Submit</button>
    </form>
    </>)
}