'use strict';
const express = require('express');
const router = express.Router();
const ContributionController = require('../controllers').Contributions;

router.route('/')
  .post(ContributionController.create);

module.exports = router;
