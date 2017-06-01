'use strict';
const express = require('express');
const router = express.Router();
const ContributionController = require('../controllers').Contributions;

router.route('/')   //TODO: Put correct route here
  .post(ContributionController.addContribution);

module.exports = router;
