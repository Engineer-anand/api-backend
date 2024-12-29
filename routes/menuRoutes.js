const express = require('express')
const router = express.Router();
// const menu = require('./../models/menu');
const menus = require('./../models/menu');

router.get('/', async (req, res) => {
    try {
        const data = await menus.find();
        console.log("data fetched from databases")
        res.status(200).json(data)
    } catch (error) {
        console.log("got some error", error)
    }

})
router.post('/', async (req, res) => {
    try {
        const data =  req.body;
        const newMenue =  new menus(data)
        const response = await newMenue.save();
        console.log('data saved')
        res.status(200).json(response)
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ error: 'internal server error' })
    }
})

module.exports=router