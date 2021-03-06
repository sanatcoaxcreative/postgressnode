const {Client} = require('pg');
const app = require('express')();
const client = new Client({
    connectionString:'postgres://gmspmkgjlozzzb:94fcaad47af5d1f3f87a391405bb97969968befdf67918c68ed59d332fdad651@ec2-54-205-61-191.compute-1.amazonaws.com:5432/d3jhvsu54b60vf'
})
try {
    client.connect().then(()=>{
        console.log('connection wth postgress!!');
    }).catch((e)=>console.log('hello',e))
} catch (error) {
    console.log('failed to connect pg!!!')
}
app.get('/', (req, res)=>{
    res.send({
        hello:'node js with postgre sql!'
    })
})
app.listen(process.env.PORT||5000, ()=>{
    console.log('Listening to server!!!')
})