const mongoose = require('mongoose');
function connectDB() {
    try
    {
        mongoose.connect('mongodb://localhost:27017/BookMyshow'); // Replace 'yourDatabaseName' with your actual database name
        console.log('MongoDB connected...');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
    }
}
module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose. It exports a function `connectDB` that establishes the connection and logs success or error messages.