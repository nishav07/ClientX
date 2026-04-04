async function signup(req,res){
    let {username,email,password} = req.body;
    console.log("signup data from server",username,email,pass);
}


function login(req,res){
    const {userName,password} = req.body;
    console.log("backend ka data",userName,password);

    res.status(200);
    
}


export {signup,login};