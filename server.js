const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3001;
app.use(Router);

//Database schema
const userCredentialSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    Age: {
        type: Number,
        default: 0
    },
    Phone: {
        type: Number,
    },
    DateOfBirth: {
        type: Date
    },
    Gender:{
        type: String
    }
});

const UserModel = userCredentialSchema; //new variable pointing to schema created


//function to connect to a database
mongoose.connect('mongodb+srv://johnwandera:wanderaelite38@cluster0.necgl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true  
})
.then(()=>{
    
    // post route to create user 
    app.post('/createUser', async (req, res)=>{
        const user = new UserModel(req.body);
        try {
            await new user.save(); //saving user to database
            res.send(user); //giving a response of the saved user
        } catch (error) {
            res.status(500).send(error);
        }
    });

    //get route to retrieve all users created
    app.get('/allUsers', async (req, res)=>{
        const users = new UserModel.find({});
        try {
            res.send(users);
            
        } catch (error) {
            res.status(500).send(error);
        }
    })
})
// .catch((err)=>{console.error(`error occured ${err}`)})

//determining connection to server if success or failure
const db = mongoose.connection;
db.once('error', (err)=>{console.error(`connection fail ${err}`)})
db.once('open', ()=>{console.log("conneted successfully")});


app.listen(port, ()=>{console.log(`server running on port ${port}`)})