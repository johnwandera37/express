const express = require('express');
const router = express.Router();
const userModel = require('./model')//exporting schema

 //creating get route
 router.get('/allUsers', async (req, res)=>{
    const users = await userModel.find() //retrieve users created
    try {
        res.send({data: users})//sending them to database
        res.status(201)//success
    } catch (error) {
        res.status(400).send(error) //bad request
    }
   
 })

 //creating post route to retrieve users
 router.get('/createUser', async (req, res)=>{
    const user = new userModel(req.body);
    try {
        await user.save(); //saving user and send to database
        res.send(user);
        res.status(201); //success
        
    } catch (error) {
        res.status(400).send(error); //bad request
    }
 })

    module.exports = router; //exporting get and post