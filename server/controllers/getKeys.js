import {pool} from "../config/sql.js";
import { generateApiKey } from "../config/apiKey.js";


export async function getApiKey(req,res) {



     if(!req.body?.data?.name){
        return res.status(404).json({msg:"Api name can not be null"});
    }
    
    let {name} = req.body.data;
    let userId = req.user.userId;
    let insertId;

  
    
     
const data = generateApiKey();

try {
    const [rows] = await pool.query("INSERT INTO apikeys (userId,keyHash,keyPrefix,apiName) VALUES(?,?,?,?)",[userId,data.hash,data.prefix,name]);
    insertId = rows.insertId

    const insertedData = {
        id: rows.insertId,
        userId,
        raw:data.raw,
        keyPrefix: data.prefix,
        apiName: name,
        };

        return res.status(200).json({apiData:insertedData})
} catch (error) {
    console.log("err while adding api",error)
    return res.status(500).json({generated:false});
}
}


export async function  apiKeys(req,res) {
    let userId = req.user.userId;

    try {
         const [rows] = await pool.query("SELECT * FROM apikeys WHERE userId = ?",[userId]);
         return res.status(200).json({keys:rows})
    } catch (error) {
        return res.status(500).json({msg:"data not fetched"});
    }
}

export async function  deleteApiKey(req,res) {
    let userId = req.user.userId;
    let leadId = req.params.id;

    try {
       const [rows] = await pool.query("DELETE FROM apikeys WHERE userId = ? AND id = ?",[userId,leadId]);
       return res.json({deleted:true});
    } catch (error) {
        console.log(error)
        return res.json({deleted:false});
    }
}


export async function apiAddLead(req,res) {

    
     if(!req.body?.data){
        return res.status(404).json({msg:"data can not be null"});
    }

    let userId = req.userId;

    let {name,email,phone,source,interest} = req.body.data;

    if(!name || !email || !phone || !source || !interest) {
    return res.status(400).json({msg: "sare fields mandatory hain"});
}
    
     try{
const [rows] = await pool.query("INSERT INTO leads (name,email,phone,source,interest,userId) VALUES(?,?,?,?,?,?)",[name,email,phone,source,interest,userId]);
    return res.json({added:true,msg:"sab chngaaa siii"});
     } catch(err){
        console.log(err);
        return res.json({added:false,msg:"kuch cangaa nahi siii"});
     }

}