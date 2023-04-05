const {Client}=require('pg')
const client=new Client({
    host:"localhost",
    port:2807,
    user:'postgres',
    password:'Deepan@123',
    database:'onlinevidya'
})
client.connect()
client.query("SELECT * FROM students",(err,result)=>{
    if(!err){
        console.log(result.rows)
    }
    client.end()
})
