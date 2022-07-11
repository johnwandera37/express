const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const router = require('./routes')

const connectMongo = async ()=>{

    try {
 //function to connect to a database
 await mongoose.connect('mongodb+srv://johnwandera:wanderaelite38@cluster0.necgl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true  
    })
    .then(()=>{
    
        console.log('server connected');

        app.get('/', (req, res)=>{ //displaying hello world in browser
            res.send('hello world')
        })
    
        app.use(express.json()); //for json content
        app.use('/', router) // routes imported also accessing routes from root, e.g 3500/allUsers
       
    })
        
    } catch (err) {
        console.error(`An error occured, connection failed ${err}`)
    }
}

connectMongo();

// .catch((err)=>{console.error(`error occured ${err}`)})
//determining connection to server if success or failure
// const db = mongoose.connection;
// db.once('error', (err)=>{console.error(`connection fail ${err}`)})
// db.once('open', ()=>{console.log("conneted successfully")});

 app.listen(port, ()=>{console.log(`server running on port ${port}`)})