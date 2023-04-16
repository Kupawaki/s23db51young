//This is a schema for the mongo database, it defines the object we can insert into the database

const mongoose = require('mongoose')
const kababSchema = mongoose.Schema({
    kabab_style:String,
    kabab_length:Number,
    kabab_lethality:String
})

module.exports = mongoose.model("kabab", kababSchema)