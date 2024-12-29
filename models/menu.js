const mongoose=require('mongoose')

const menuSchema=mongoose.Schema({
    name:{
        type:String
    },
    food:{
        type:String
    },
    taste:{
        type:String
    },  
    price:{
        type:String
    }

})
const menus=mongoose.model('menus',menuSchema)

module.exports=menus;