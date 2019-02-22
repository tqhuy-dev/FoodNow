const express = require('express');
const router = express.Router();
const UserBusiness = require('../business/userBusiness');
const constant = require('../shared/constant');
const common = require('../shared/common');

const userBusiness = new UserBusiness();
router.get('/', (req, res, next) => {
  res.status(200).json({
    messsage: 'user api is working'
  })
});

router.post('/login', (req, res, next) => {
  userBusiness.login(req).then((result) => {

    if (result) {
      res.status(200).json(common.AuthResponse(200,"Login Success" , result));
    } else {
      res.status(200).json(common.AuthResponse(200,"Login Fail" , result));
    }
  }).catch((error) => {
    res.status(404).json(constant.QUERY_ERROR_RESPONSE)
  })
})

router.post('/signin', (req, res, next) => {
  userBusiness.signin(req).then((result) => {
    if (result) {
      res.status(200).json(common.AuthResponse(200,"Signin Success" , result));
    } else {
        res.status(200).json(common.AuthResponse(200,"Account is already exist" , result));
    }
  }).catch((error) => {
    res.status(404).json(constant.QUERY_ERROR_RESPONSE)
  });

})

module.exports = router;
