const {Client} = require('pg');
const app = require('express')();
const client = new Client({
    connectionString:'postgres://gmspmkgjlozzzb:94fcaad47af5d1f3f87a391405bb97969968befdf67918c68ed59d332fdad651@ec2-54-205-61-191.compute-1.amazonaws.com:5432/d3jhvsu54b60vf'
})

app.get('/', (req, res)=>{
    client.connect().then((data)=>{
        console.log('connection wth postgress!!');
        res.send({
            hello:'node js with postgre sql!',
            data:data
        })
    }).catch((e)=>res.send(e))
    
})
app.listen(process.env.PORT||5000, ()=>{
    console.log('Listening to server!!!')
})