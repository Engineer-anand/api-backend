const mongoose=require('mongoose')

const personSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        mobile:{
            type:String,
            unique:true
        },
        address:{
            type:String
        },
        salary:{
            type:String
        }
    }
)
const persons=mongoose.model('persons',personSchema)

module.exports=persons;