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


export {hash,verification};