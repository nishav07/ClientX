import {pool} from "../config/sql.js";
import { hash } from "../middlewares/hashing.js";
import { verification } from "../middlewares/hashing.js";
// import jwt from 'jsonwebtoken';


export async function dashboard(req,res){
    let user = req.user;
    let userId = req.user.userId;
  

   try {
    const [rows] = await pool.query("SELECT * FROM leads WHERE userId = ?",[userId]);
   

     let count = rows.reduce((acc,curr) => {
        if(acc[curr.status]){
            acc[curr.status]++;
        } else {
            acc[curr.status] = 1;
        }
        return acc;
    },{})

    let sameSrc = {};
    rows.forEach((val) => {
  if(sameSrc[val.source]){
    sameSrc[val.source]++
  } else {
    sameSrc[val.source] = 1
  }
})



     return res.json({data:user,leads:rows,count:count,sameSrc:sameSrc});
   } catch (error) {
    console.log(error)
    return res.json({msg:"data not found"});
   }

}


export async function addLeads(req,res){
    let {name,email,phone,source,interest} = req.body.data;
    let userId = req.user.userId;
    
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

   

    try {
       const [rows] = await pool.query("UPDATE leads SET status = ? WHERE id = ? AND userId = ?",[status,leadId,userId,]);

       if(rows.affectedRows === 0){
         return res.status(404).jsos({message:"User not found",updated:false})
       }
       return res.json({updated:true});
    } catch (err) {
        console.log(err)
        return res.json({updated:false});
    }
}

export async function filterData(req,res) {
    let userId = req.user.userId;

     try {
    const [rows] = await pool.query("SELECT * FROM leads WHERE userId = ?",[userId]);
    

    let count = rows.reduce((acc,curr) => {
        if(acc[curr.status]){
            acc[curr.status]++;
        } else {
            acc[curr.status] = 1;
        }
        return acc;
    },{})

     return res.json({data:req.user,leads:rows}); 
   } catch (error) {
    console.log(error)
    return res.json({msg:"data not found"});
   }
}

export async function deleteLeads(req,res) {
    let userId = req.user.userId;
    let leadId = req.params.id;

    try {
       const [rows] = await pool.query("DELETE FROM leads WHERE userId = ? AND id = ?",[userId,leadId]);
       if(rows.affectedRows === 0){
         return res.status(404).jsos({msg:"User not found",deleted:false})
       }
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
        const [rows] = await pool.query("SELECT * FROM leads WHERE userId = ? AND id = ?",[userId,leadId]);
        console.log("single lead from DB",leadId);
        return res.json({lead:rows[0]});
    } catch (err) {
        return console.log("err from leadData",err);
        return res.status(500).json({ msg: "Lead not found" })
    }
}


export async function editLeads(req,res) {
    let userId = req.user.userId;
    let leadId = req.params.id;
    let {name,email,phone,source,interest} = req.body.data;

    try {
        console.log("edit ke liye aaya hua data",{name,email,phone,source,interest});
        const [rows] = await pool.query("UPDATE leads SET name = ?,email = ?,phone = ?,source = ?,interest = ? WHERE userId = ? AND id = ?",[name,email,phone,source,interest,userId,leadId])
        res.json({allGood:true});
    } catch (error) {
        res.json({allGood:false})
        console.log("edit route se aaya err",error)
    }
}