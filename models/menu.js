const mongoose=require('mongoose')

const menuSchema=mongoose.Schema({
    name:{
        type:String
    },
    food:{
        type:String
    },
    taste:{
        type:String,
        enum:['sweet','bitter','spicy']
    },  
    price:{
        type:String
    }

})
const menus=mongoose.model('menus',menuSchema)

module.exports=menus;