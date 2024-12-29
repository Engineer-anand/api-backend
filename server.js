const express = require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser')
app.use(bodyparser.json());


app.get('/', (req, res) => {
    res.send("here is my website and you can get all anime information from this website");
})
 const animeRoutes= require('./routes/animeRoutes')
 const personRoutes= require('./routes/personRouts')

 app.use('/animes',animeRoutes)
 app.use('/person',personRoutes)

app.listen(3000)