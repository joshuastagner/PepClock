'use strict';
const express = require('express');
const router = express.Router();
const ContributionController = require('../controllers').Contributions;

router.route('/')   //TODO: Put correct route here
  .post(ContributionController.create);

module.exports = router;
