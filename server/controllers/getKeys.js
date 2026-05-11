import {pool} from "../config/sql.js";
import { generateApiKey } from "../config/apiKey.js";


export async function getApiKey(req,res) {
    let {name} = req.body.data;
    let userId = req.user.userId;
    
     try{
const data = generateApiKey();
console.log("data from api",data)

try {
    const [rows] = await pool.query("INSERT INTO apikeys (userId,keyHash,keyPrefix,apiName) VALUES(?,?,?,?)",[userId,data.hash,data.prefix,name]);
} catch (error) {
    console.log("err while adding api",error)
    return res.status(401).json({generated:false});
}
    

try {
    const [rows] = await pool.query("SELECT * FROM apikeys WHERE userId = ?",[userId]);
    return res.status(200).json({apiData:rows[0]})
} catch (error) {
    console.log(error)
}

     } catch(err){
        console.log(err);

        return res.json({generated:false});
     }
}