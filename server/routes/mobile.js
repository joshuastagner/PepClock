'use strict';
const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

router.route('/login')
  .post((req, res) => {
    middleware.passport.authenticate('local-login', (err, user, info) => {
      if (err) { return res.send(err); }
      if (!user) { return res.send(null); }
      req.login(user, (err) => {
        if (err) { return next(err); }
        res.send(user);
      });
    })(req, res);
  });

module.exports = router;
