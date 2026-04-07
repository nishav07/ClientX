import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";



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
    return(<>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="enter your userName" {...register("userName")} />
        <input type="email" placeholder="npm@xyz.com" {...register("email")} />
        <input type="password"  placeholder="enter your password" {...register("password")} />
        <button>Submit</button>
    </form>
    </>)
}