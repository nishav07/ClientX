async function signup(req,res){
    let {userName,email,password} = req.body;
    console.log("signup data from server",userName,email,password);

    res.json({ message: "signup ho gya" })
}


function login(req,res){
    const {userName,password} = req.body;
    console.log("backend ka data",userName,password);

    res.json({ message: "Login success" })
    
}


export {signup,login};