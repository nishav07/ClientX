async function signup(req,res){
    let {username,email,password} = req.body;
    console.log{"signup data from server",username,email,pass}
}


function login(req,res){
    const {username,password} = req.body;
    
}


export {signup,login};