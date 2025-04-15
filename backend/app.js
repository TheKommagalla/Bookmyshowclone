const express = require('express');
const app = express();
const port = 3000;
const router = require('./controller/search');
const actor = require('./controller/actor');
const crew=require('./controller/crew')
const movie = require('./controller/moviedata');
const connectionDB = require('./db');
const cors = require('cors'); // Import cors package


// Connect to MongoDB
connectionDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // Enable CORS for all routes

// Use router with a base path
app.use('/api', router);
app.use('/actor', actor);
app.use('/crew',crew);
app.use('/movie', movie);




// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
