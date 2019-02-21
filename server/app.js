const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');


app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/v1/foodnow' , (req , res , next) =>{
    res.status(200).json({
        message:'api is working',
        status:'success'
    })
});

app.use((req , res , next) => {
    next(constant.ERROR_MESSAGE_404)
})

app.use((error , req , res , next) =>{
    res.status(error.status || 404);
    res.json({
        message : error.message
    })
})

module.exports = app;