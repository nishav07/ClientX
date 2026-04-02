import sql from "mysql2/promise";

export const pool = sql.createPool({
    host:process.env.HOST,
    port:process.env.PORT,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB
})

export async function test(){
    try{
        const[rows] = await pool.query("SELECT 2+2 AS result");
        console.log(rows);
    } catch (err) {
        console.log('failed to connect',err)
    }
}