const uuid = require('uuid');
const UserDatabase = require('../Database/userDatabase');
const Promise = require('bluebird');

var userDB = new UserDatabase();

class UserBusiness {

  login(req) {
    return new Promise((resolve, reject) => {
      userDB.checkExistence(req).then((result) => {
        if (result) {
          resolve(uuid())
        } else {
          resolve(false);
        }
      }).catch((error) => {
        reject(error);
      })
    })

  }

  async signin(req){
      try {
          const isExistence = await userDB.checkExistence(req);
          if(isExistence != null){
              return new Promise.resolve(false);
          } else {
              const createAccountFlag = await userDB.createAccount(req);
              return new Promise.resolve(uuid());
          }
      } catch (error) {
          return new Promise.reject(false);
      }
  }
}

module.exports = UserBusiness;
