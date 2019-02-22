const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idStore: String,
    foodName: String,
    typeFood: String,
    price: Number,
    status: Number,
    trend: Number,
    totalBooking: Number
})

module.exports = mongoose.model('Food' , FoodSchema , 'Food');