const food = require('../Model/food');

class FoodDatabase {
    getFood(req){
        var bodyReq = {
            idStore:req.params.idStore
        }
        if(req.params.type !== 'all'){
            bodyReq.typeFood = req.params.type;
        }
        return new Promise((resolve , reject) =>{
            food.find(bodyReq , (error , result) =>{
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
}

module.exports = FoodDatabase;