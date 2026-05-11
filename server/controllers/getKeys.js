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
console.log("data from api",data)

try {
    const [rows] = await pool.query("INSERT INTO apikeys (userId,keyHash,keyPrefix,apiName) VALUES(?,?,?,?)",[userId,data.hash,data.prefix,name]);
    insertId = rows.insertId
    console.log("insert id",insertId);

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