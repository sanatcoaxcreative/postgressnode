const {Client} = require('pg');
const app = require('express')();
app.get('/', (req, res)=>{
    res.send({
        hello:'node js with postgres!'
    })
})
app.listen(process.env.PORT||5000, ()=>{
    console.log('Listening to server!!!')
})