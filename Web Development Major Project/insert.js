const {Client}=require('pg')
const client=new Client({
    host:"localhost",
    port:2807,
    user:'postgres',
    password:'Deepan@123',
    database:'onlinevidya'
})
client.connect()
client.query("INSERT INTO students(sno, name, phone, email, course) VALUES (2,'Sunil',9876543254,'sunil@gmail.com','webdevelopment')",(err,result)=>{
    if(!err){
        console.log("Data Inserted successfully")
    }
    client.end()
})
