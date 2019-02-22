const FoodDB = require('../Database/foodDatabase');
var foodDB = new FoodDB();
const Promise = require('bluebird');

class FoodBusiness {
    async getListFood(req){
        try {
            const listFood = await foodDB.getFood(req);
            return new Promise.resolve(listFood);
        } catch (error) {
            return new Promise.reject(error);            
        }
    }
}

module.exports = FoodBusiness;