import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) => {

  console.log("yaaha tak sab chal rha hai")
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ message: 'Token nahi mila, pehle login karo' })
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    
    req.user = decoded
     console.log("yaaha tak bhi chala hai",decoded)
    next()
    
  } catch (err) {
    console.log("middleware pe problem",err)
    return res.status(403).json({ message: 'Token invalid ya expire ho gaya' })
  }
}