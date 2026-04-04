import { useState } from "react"


export default function Login(){
    let [form,setForm] = useState({
        userName:"",password:""
    })

    let inputHandler = (e) => {
        let currName = e.target.name;
        let currVal = e.target.value;

        setForm((currData) => {
            currData[currName] = currVal;
            return {...currData};
        })

    }

     return(<>
    <h1>Login box</h1>

    <form action="http://localhost:8080/login" method="POST">
        <input type="text" name="userName" placeholder="enter your userName" onChange={inputHandler} />
        <input type="password" name="password" placeholder="enter your password" onChange={inputHandler}/>
        <button>Submit</button>
    </form>

    <p>userName:{form.userName} password:{form.password}</p>
    </>)
}