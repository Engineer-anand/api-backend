const express= require('express')
const router = express.Router();
const animes = require('./../models/animes')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newAnimes = new animes(data)
        const response = await newAnimes.save();
        console.log('data saved')
        res.status(200).json(response)
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ error: 'internal server error' })

    }
})
router.get('/', async (req, res) => {
    try {
        const data = await animes.find()

        res.status(200).json(data)
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json(error)
    }
})

router.get('/:releases', async (req, res) => {
    try {
        const releases = req.params.releases;
        if (releases == 2020 || releases == 2021 || releases == 2022 || releases == 2023 || releases == 2024) {
            const response = await animes.find({ release: releases })
            console.log('data fetched')
            res.status(200).json(response) 
        }
        else {
            res.status(404).json({ error: 'invalid params' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json(error)
    }
})

module.exports=router