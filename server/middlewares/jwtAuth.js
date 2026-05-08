import jwt from 'jsonwebtoken'
// import { pool } from '../config/sql'
import { pool } from '../config/sql.js'


export const verifyToken = async (req, res, next) => {

  console.log("yaaha tak sab chal rha hai")
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ message: 'Token nahi mila, pehle login karo' })
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded

     const [rows] = await pool.query("SELECT * FROM users WHERE userName = ?",decoded.userName);

     if(rows.length === 0){
      return res.status(401).json({message:"User not found"})
     }

     console.log("yaaha tak bhi chala hai",decoded)
    next()
    
  } catch (err) {
    console.log("middleware pe problem",err)
    return res.status(403).json({ message: 'Token invalid ya expire ho gaya' })
  }
}