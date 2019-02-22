const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    account:String,
    password: String,
    firstName: String,
    lastName: String,
    birthday: String,
    cart:[],
    log:[]
},{versionKey:false})

module.exports = mongoose.model('User' , UserSchema , 'User');