import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";
import jwt from 'jsonwebtoken';

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
              const token = jwt.sign(
                            {
                                userId: rows[0].userId,
                                email: rows[0].email,
                                userName: rows[0].userName
                            },
                                process.env.JWT_SECRET,
                               { expiresIn: '7d' }  
                            )

            return res.json({ message: "login ho gya" ,success:true,userData:rows[0],token:token});
        } else {
            return res.status(400).json({ message: "password galat haiiii" ,success:false});
        }

    } catch (error) {
         res.json({ message: "loggedIn failed" ,success:false});
        console.log("login wala err from db",error)
    }


    res.json({ message: "Login success",success:true })
    
}


export {signup,login};