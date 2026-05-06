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

     let count = rows.reduce((acc,curr) => {
        if(acc[curr.status]){
            acc[curr.status]++;
        } else {
            acc[curr.status] = 1;
        }
        return acc;
    },{})

    console.log("counts",count)

     return res.json({data:user,leads:rows,count:count});
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
    let leadId = req.params.id;

    console.log("status from jsx",status,leadId);

    try {
       const [rows] = await pool.query("UPDATE leads SET status = ? WHERE id = ? AND userId = ?",[status,leadId,userId,]);
       return res.json({updated:true});
    } catch (error) {
        console.log(err)
        return res.json({updated:false});
    }
}

export async function filterData(req,res) {
    let userId = req.user.userId;

     try {
    const [rows] = await pool.query("SELECT * FROM leads WHERE userId = ?",[userId]);
    console.log("data of leadssss",rows);

   

    let count = rows.reduce((acc,curr) => {
        if(acc[curr.status]){
            acc[curr.status]++;
        } else {
            acc[curr.status] = 1;
        }
        return acc;
    },{})

    console.log("counts",count)

     return res.json({data:user,leads:rows});
   } catch (error) {
    console.log(error)
    return res.json({msg:"data not found"});
   }
}

export async function deleteLeads(req,res) {
    let userId = req.user.userId;
    let leadId = req.params.id;

     console.log("delete req for ",userId,leadId);

    try {
       const [rows] = await pool.query("DELETE FROM leads WHERE userId = ? AND id = ?",[userId,leadId]);
       return res.json({deleted:true});
    } catch (error) {
        console.log(error)
        return res.json({deleted:false});
    }

}

export async function leadData(req,res){
    let userId = req.user.userId;
    let leadId = req.params.id;

    try {
        
    } catch (err) {
        
    }
}