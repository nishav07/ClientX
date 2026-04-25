import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";
// import jwt from 'jsonwebtoken';


export async function dashboard(req,res){
    let user = req.user;
    let userId = req.user.userId;
   console.log("user from backend",user,userId);

   try {
    const [rows] = await pool.query("SELECT * FROM leads WHERE userId = ?",[userId]);
    console.log("data of leads",rows);
     return res.json({data:user,leads:rows});
   } catch (error) {
    console.log(error)
    return res.json({msg:"data not found"});
   }

}


export async function addLeads(req,res){
    let {name,email,phone,source,interest} = req.body.data;
    let userId = req.user.userId;
    console.log("add leads data from backend",{name,email,phone,source,interest,userId});
    console.log("userrrrr",userId);
     try{
const [rows] = await pool.query("INSERT INTO leads (name,email,phone,source,interest,userId) VALUES(?,?,?,?,?,?)",[name,email,phone,source,interest,userId]);
    return res.json({added:true});
     } catch(err){
        console.log(err);

        return res.json({added:false});
     }
}

export async function statusUpdate(req,res){
    let userId = req.user.userId;
    let { status } = req.body;

    console.log("status from jsx",status);

    try {
       const [rows] = await pool.query("UPDATE leads SET status = ? WHERE userId = ?",[status,userId]);
       return res.json({updated:true});
    } catch (error) {
        console.log(err)
        return res.json({updated:false});
    }
}