const mongoose = require('mongoose');
const data = require('../model/SearchSchema');
const express = require('express');
const router = express.Router();

// POST request — receiving data
router.post('/:search', (req, res) => {
    const {search} = req.params;  // or req.body if you're using body-parser middleware
    console.log('Data received:',search);
    res.send('Data received successfully');
});

// GET request — fetching data
router.get('/:title', async (req, res) => {
    try {
        const {title} = req.params;  // or req.params if you're using /route/:value
        console.log('get method Title received:',title);
        // const dbData = await data.findOne({title:title}); // Assuming you want to find by title
        const movies = await data.findOne({
            title: { $elemMatch: { $regex: new RegExp(title, 'i') } }
          });
        console.log('Data fetched:', movies);
        if (!movies) {
            return res.status(404).send('No matched data found');
        }
      
        else {
            res.json(movies);

            console.log(`Data fetched: ${movies}`);
        }
      
    } catch (err) {
        res.status(500).send('Server Error: ' + err.message);
    }
});

module.exports = router;
