const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userCredentialSchema);