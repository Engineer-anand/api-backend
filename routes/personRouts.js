const express = require('express');
const router = express.Router();
const Person = require('../models/person'); // Assuming you have a Person model defined

// Get all persons

router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();  // Fetch all persons
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching persons', error });
    }
});

// Add a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;  // Assuming person has these fields
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();  // Save the person to DB
        res.status(201).json(savedPerson);
    } catch (error) {
        res.status(500).json({ message: 'Error saving person', error });
    }
});

module.exports = router;
