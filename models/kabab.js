const mongoose = require('mongoose')
const kababSchema = mongoose.Schema({
    kabab_style:String,
    kabab_length:Number,
    kabab_lethality:String
})

module.exports = mongoose.model("kabab", kababSchema)