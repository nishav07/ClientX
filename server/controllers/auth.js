import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";
import jwt from 'jsonwebtoken';

async function signup(req,res){
    let {userName,email,password} = req.body;
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
    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE userName = ?",[userName]);

        if(rows.length === 0){
            return res.json({ message: "User not found" ,success:false});
        }

        const hashPass = rows[0].password;
        console.log("passsword",hashPass);

        const isPassCorrect = await verification(password,hashPass);

        console.log("is pass correct",isPassCorrect)

        if(isPassCorrect){
            console.log("password sahi h")
              const token = jwt.sign(
                            {
                                userId: rows[0].userId,
                                email: rows[0].email,
                                userName: rows[0].userName
                            },
                                process.env.JWT_SECRET,
                               { expiresIn: '7d' }  
                            )

                            res.cookie("token", token, {
                                httpOnly: true,
                                secure: false, 
                                sameSite: "lax",
                                maxAge: 7 * 24 * 60 * 60 * 1000
                            });

                            console.log("chk headers",res.getHeaders());

            return res.json({ message: "login ho gya" ,success:true,userData: { userId: rows[0].userId, email: rows[0].email,userName: rows[0].userName}});
        } else {
            return res.status(400).json({ message: "password galat hai" ,success:false});
        }

    } catch (error) {
         res.json({ message: "loggedIn failed" ,success:false});
        console.log("login wala err from db",error)
    }
    
    
}


export {signup,login};