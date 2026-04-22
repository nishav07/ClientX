import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";
// import jwt from 'jsonwebtoken';


export function dashboard(req,res){
    let user = req.user;
   console.log("user from backend",user);
   return res.json({msg:"ok",data:user});
}

export async function addLeads(req,res){
    let {name,email,phone,source,interest} = req.body.data;
    let userId = req.user.id;
    console.log("add leads data from backend",{name,email,phone,source,interest});
     try{
const [rows] = await pool.query("INSERT INTO leads (name,email,phone,source,interest,userId) VALUES(?,?,?,?,?,?)",[name,email,phone,source,interest,userId]);
    return res.json({added:true});
     } catch(err){
        console.log(err);
        return res.json({added:false});
     }
}