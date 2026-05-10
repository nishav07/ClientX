import {pool} from "../config/sql.js";


export async function getApiKey(req,res) {
    let {name} = req.body.data;
    let userId = req.user.userId;
    
     try{
const [rows] = await pool.query("INSERT INTO leads (name,email,phone,source,interest,userId) VALUES(?,?,?,?,?,?)",[name,email,phone,source,interest,userId]);
    return res.json({added:true});
    
     } catch(err){
        console.log(err);

        return res.json({added:false});
     }
}