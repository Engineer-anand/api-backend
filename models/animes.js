const mongoose = require("mongoose");

const animeSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            unique:true
        },
        episode:{
            type:String
        },
        rating:{
            type:String,
        },
        revenue:{
            type:String
        },
        release:{
            type:String,
            enum:['2020','2021','2022','2023','2024']

        }
    }
)
const animes=mongoose.model('animes',animeSchema)
module.exports=animes;