const express = require('express');
const router = express.Router();
const FoodBusiness = require('../business/foodBusiness');
var foodBusiness = new FoodBusiness();
const constant = require('../shared/constant');
const common = require('../shared/common');

router.get('/store/:idStore/type/:type' , (req , res , next) =>{
    listFood = foodBusiness.getListFood(req).then((result) =>{
        if(result.length > 0){
            res.status(200).json(common.DataResponse(200,"Success",result));
        } else {
            res.status(200).json(common.DataResponse(200 , "No Data" , result));
        }
    }).catch((error) =>{
        res.status(404).json(constant.QUERY_ERROR_RESPONSE);
    });
})

module.exports = router;