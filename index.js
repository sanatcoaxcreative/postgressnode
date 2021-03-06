const {Client} = require('pg');
const app = require('express')();
app.get('/', (req, res)=>{
    res.send({
        hello:'node js with postgres!'
    })
})
app.listen(process.env.PORT||, ()=>{
    console.log('Listening to server!!!')
})