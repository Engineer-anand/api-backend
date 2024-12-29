const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Assuming this connects to the database (MongoDB, MySQL, etc.)

const app = express();

// Middleware for parsing JSON and handling CORS
app.use(bodyParser.json());
app.use(cors());

// Routes
const animeRoutes = require('./routes/animeRoutes');
const personRoutes = require('./routes/personRouts');
const menuRoutes = require('./routes/menuRoutes');


// Routes setup with appropriate prefixes
app.use('/animes', animeRoutes);
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

// Home route
app.listen(3000)