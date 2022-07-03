const mongoose = require('mongoose');

//Database schema
const userCredentialSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    Age: Number,
    Phone: Number,
    DateOfBirth: Date,
    Gender: String
});

module.exports = mongoose.model('Users', userCredentialSchema);