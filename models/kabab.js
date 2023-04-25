//This is a schema for the mongo database, it defines the object we can insert into the database

const mongoose = require('mongoose')
const kababSchema = mongoose.Schema({
    kabab_style:{
        type:String,
        required:true,
        minLength:1,
        maxLength:20
    },
    kabab_length:{
        type:Number,
        required:true,
        min:1,
        max:100
    },
    kabab_lethality:{
        type:String,
        required:true,
        minLength:1,
        maxLength:10
    }
})

module.exports = mongoose.model("kabab", kababSchema)