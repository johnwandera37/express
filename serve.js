// const http = require('http');
// const port = 3001;

// const server = http.createServer((req, res)=>{
//     res.end('Hello world');
// })
// server.listen(port, ()=>{console.log(`server running on port ${port}`)})

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3500;

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    if(req.url === '/' || req.url === 'text/html'){
        res.statusCode = 200;
        res.setHeader('contentType', 'text/html');
       let path1 = path.join(__dirname, 'load', 'index.html');
        fs.readFile(path1, 'utf8', (err, data)=>{
            res.end(data);
        })
    }
})

server.listen(port, ()=>{console.log(`server running on port ${port}`)});