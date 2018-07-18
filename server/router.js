const express = require('express');
const router = express.Router();

const controller = require('./controller');
const resHandler = require('./resHandler');
const tokenService = require('../auth/TokenService');



module.exports = router;
