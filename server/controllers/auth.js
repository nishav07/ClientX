import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";

async function signup(req,res){
    let {userName,email,password} = req.body;
    console.log("signup data from server",userName,email,password);
    let hashedPass = await hash(password);
    console.log(hashedPass);
    try {
        const [rows] = await pool.query("INSERT INTO users (userName,email,password) VALUES(?,?,?)",[userName,email,hashedPass]);
         res.json({ message: "succesfully signedUp", success:true })
    } catch (error) {
        res.json({ message: "signup failed" ,success:false});
        console.log(error);
    }
   
}


async function login(req,res){
    const {userName,password} = req.body;
    console.log("backend ka data",userName,password);

    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE userName = ?",userName);

        if(rows.length === 0){
            return res.json({ message: "User not found" ,success:false});
        }

        const hashPass = rows[0].password;
        console.log("passsword",hashPass);

        const isPassCorrect = await verification(password,hashPass);

        if(isPassCorrect){
            return res.json({ message: "signup hogyaaa" ,success:true,userData:rows[0]});
        } else {
            return res.json({ message: "password galat haiiii" ,success:false});
        }

    } catch (error) {
         res.json({ message: "loggedIn failed" ,success:false});
        console.log("login wala err from db",error)
    }


    res.json({ message: "Login success",success:true })
    
}


export {signup,login};