import { pool } from '../config/sql.js'
import { getHash } from '../config/apiKey.js'

export async function verifyApiKey(req,res,next) {
    let apiKey = req.headers['x-api-key'];

    if (!apiKey) return res.status(401).json({ msg: 'API key required' });
    
    let hash = getHash(apiKey);

    console.log("hash from user raw",hash)

    try {
         const [rows] = await pool.query("SELECT * FROM apikeys WHERE keyHash = ?",[hash]);
         if(!rows[0]) {
            return  res.status(404).json({msg:"api key not founds"});
         }
         req.userId = rows[0].userId;
         next()
    } catch (error) {
        return res.status(500).json({msg:"invalid key"});
    }

    }
