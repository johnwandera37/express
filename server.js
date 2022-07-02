const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3001;
app.use(Router);


//function to connect to a database
mongoose.connect('mongodb+srv://johnwandera:wanderaelite38@cluster0.necgl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true  
})

// .then(()=>{})
// .catch((err)=>{console.error(`error occured ${err}`)})

//determining connection to server if success or failure
const db = mongoose.connection;
db.once('error', (err)=>{console.error(`connection fail ${err}`)})
db.once('open', ()=>{console.log("conneted successfully")});


app.listen(port, ()=>{console.log(`server running on port ${port}`)})