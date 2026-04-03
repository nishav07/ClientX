import bcrypt from "bcrypt";

async function hash(pass){
    const rounds = 10;
    const encryptedPass = await bcrypt.hash(pass,rounds);
    return encryptedPass;
}

async function verification(pass,passDB) {
    const check = await bcrypt.compare(pass,passDB);
    return check;
}


const password = await hash("Nishav2015$$%");
const check = await bcrypt.compare("Nishav2015$%",password)

console.log(check);

export {hash,verification};