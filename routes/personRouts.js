const express= require('express')
const router = express.Router();
const persons = require('./../models/person')


router.get('/', async (req, res) => {
    try {
        const data = await persons.find()
        console.log('data fetched from  persons database')
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }

})


router.post('/', async (req, res) => {
        try {
           const data=req.body;
           const newPerson= new persons(data)
           const response=await newPerson.save();
           console.log('your data is saved in database')
           res.status(200).json(response)

        } catch (error) {
            res.status(500).json(error)
        }
})
module.exports=router;