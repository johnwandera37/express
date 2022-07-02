const { Router } = require('express');
const express = require('express');
const app = express();
const userModel = require('./model')//exporting schema
app.use(Router);

    // post route to create user 
    app.post('/createUser', async (req, res)=>{
        const user = new userModel(req.body); //contents from schema
        try {
            await new user.save(); //saving user to database
            res.send(user); //giving a response of the saved user
            res.statusCode(201) //success
        } catch (error) {
            res.status(400).send(error); //bad request and error sent
        }
    });

    //get route to retrieve all users created
    app.get('/allUsers', async (req, res)=>{
        const users = new userModel.find({}); //retrieving users created
        try {
            res.send(users);
            res.statusCode(201)//success
            
        } catch (error) {
            res.status(400).send(error);
        }
    })

    module.exports = app; //exporting get and post