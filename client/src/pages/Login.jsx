// import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function Login(){
      const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
    console.log(data);

    try {
        let res = axios.post("http://localhost:8080/login",data);
        console.log("response  ",res)
    } catch (error) {
        console.log(error);
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
    <h1>Login box</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="enter your userName" {...register("userName")} />
        <input type="password"  placeholder="enter your password" {...register("password")} />
        <button>Submit</button>
    </form>
    </>)
}