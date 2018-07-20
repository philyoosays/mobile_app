const bcrypt = require('bcrypt');
const model = require('../server/models');
const TokenService = require('./TokenService');

module.exports = {
  async isValidUser(req, res, next) {
    try {
      const user = await model.findOneUser(req.body.username.toLowerCase());
      console.log('user', user)
      res.locals.user = user[0];
      res.locals.ispassgood = await bcrypt.compare(req.body.password, user[0].pass_digest);
      next()
    } catch (err) {
      console.error(err);
    }
  },

  async generatePassword(req, res, next) {
    const { password } = req.body;
    await bcrypt.hash(password, 11)
      .then( (hash) => {
        res.locals.user = req.body;
        res.locals.user.pass_digest = hash;
        next();
      })
      .catch( (err) => {
        next(err);
      })
  },

  doesUserExist(req, res, next) {
    req.body.username = req.body.username.toLowerCase();
    model.findOneUser(req.body.username)
      .then(data => {
        if(data.length !== 0){
          res.locals.userExists = true;
          next();
        } else {
          res.locals.userExists = false;
          next()
        }
      })
      .catch(err => {
        next(err);
      })
  },

  registerUser(req, res, next) {
    res.locals.user.role = res.locals.role;
    model.addUser(res.locals.user)
      .then( (data) => {
        next();
      })
      .catch((err) => {
        next(err);
      })
  },

  authenticate(req, res, next) {
    if (res.locals.ispassgood === false) {
      return next({});
    }
    TokenService.makeToken({
      role: res.locals.user.account_type,
      id: res.locals.user.id,
      user: res.locals.user.username
    })
      .then((token) => {
        res.locals.token = token;
        next();
      })
      .catch(next);
        return false;
  },

  allow({ roles }) {
    return [
      (req, res, next) => {
        TokenService.verify(req.authToken)
          .then((payload) => {
            const isAuthorized = roles.some(n => payload.roles.includes(n));
            return isAuthorized ? next() : Promise.reject('User not authorized');
          })
          .catch(next);
      },
      (err, req, res, next) => {
        console.log(err);
        res.status(403).json({});
      },
    ];
  },

  killArray(user) {
    if(Array.isArray(user)) {
      return user[0];
    } else {
      return user;
    }
  }
};
