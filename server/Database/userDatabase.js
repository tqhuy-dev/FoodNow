const user = require('../Model/user');
const mongoose = require('mongoose');
class UserDatabase {
  checkExistence(req) {
    return new Promise((resolve, reject) => {
      user.findOne({
        account: req.body.account,
        password: req.body.password
      }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
    })
  }

  createAccount(req) {
    return new Promise((resolve, reject) => {
      let newUser = new user({
        _id: new mongoose.Types.ObjectId,
        account: req.body.account,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        cart: [],
        log: []
      });

      user.create(newUser, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      })
    })
  }
}

module.exports = UserDatabase;
