const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema(
{
    username: String,
    password: String
});

accountSchema.methods.validPassword = function( pwd ) 
{
    console.log("authpass")
    console.log(this.username)
    console.log(this.password === pwd);
    console.log(passportLocalMongoose.password);
    console.log(pwd)
    return ( this.password === pwd );
};

accountSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Account", accountSchema);