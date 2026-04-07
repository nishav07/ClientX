import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";

async function signup(req,res){
    let {userName,email,password} = req.body;
    console.log("signup data from server",userName,email,password);
    let hashedPass = await hash(password);
    console.log(hashedPass);
    try {
        // const [rows] = await pool.query("INSERT INTO users (userName,email,passowrd) VALUES(?,?,?)",[userName,email,hashedPass]);
         res.json({ message: "succesfully signedUp", success:true })
    } catch (error) {
        res.json({ message: "signup failed" ,success:false})
    }
   
}


function login(req,res){
    const {userName,password} = req.body;
    console.log("backend ka data",userName,password);

    res.json({ message: "Login success" })
    
}


export {signup,login};