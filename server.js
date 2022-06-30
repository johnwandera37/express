// const http = require('http');
// const port = 3001;

// const server = http.createServer((req, res)=>{
//     res.end('Hello world');
// })
// server.listen(port, ()=>{console.log(`server running on port ${port}`)})


const express = require('express');
const app =express();
const port = 3001;

app.get('/', (req, res)=>{
    res.send('hello world')
    
})
app.listen(port, ()=>{console.log(`server running on port ${port}`)})