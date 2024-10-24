const express = require('express')
const app = express()
const fs = require('fs');
let counter = 0;
const filePath = 'expressProj/counter.txt'

if(fs.existsSync(filePath)){
    counter = parseInt(fs.readFileSync(filePath, 'utf-8')|| 0)
}

app.get('/', (req, res)=>{
    counter++
    fs.writeFileSync(filePath, counter.toString());
    res.send(`Лічильник відвідувань: ${counter}`)
})

app.listen(3000)
