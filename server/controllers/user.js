import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";
// import jwt from 'jsonwebtoken';


export function dashboard(req,res){
    let user = req.user;
   console.log("user from backend",user);
   return res.json({msg:"ok",data:user});
}

export function addLeads(req,res){
    let data = req.body;
    console.log("add leads data from backend",data);
     return res.json({msg:"ok"});
}