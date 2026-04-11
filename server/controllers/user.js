export function dashboard(req,res){
    let user = req.user;
   console.log("user from backend",user);

   return res.json({msg:"ok",data:user});
}