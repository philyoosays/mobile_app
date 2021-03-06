const express = require('express');
const router = express.Router();

const controller = require('./controller');
const resHandler = require('./resHandler');
const tokenService = require('../auth/TokenService');

router.route('/interests')
  .post(
    controller.verifySite,
    tokenService.receiveToken,
    tokenService.verify,
    controller.getInterests,
    resHandler.sendJSON
  )

module.exports = router;
