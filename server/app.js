const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

const userController = require('./Controller/userController');
const foodController = require('./Controller/foodController');

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/FoodNow',{
    useNewUrlParser :true
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.get('/api/v1/foodnow' , (req , res , next) =>{
    res.status(200).json({
        message:'api is working',
        status:'success'
    })
});


app.use('/api/v1/foodnow/user' , userController);
app.use('/api/v1/foodnow/food' , foodController);

app.use((req , res , next) => {
    next({
        status:404,
        message:'request not found'
    })
})

app.use((error , req , res , next) =>{
    res.status(error.status || 404);
    res.json({
        message : error.message
    })
})

module.exports = app;