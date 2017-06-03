'use strict';
const express = require('express');
const router = express.Router();
const ContributionController = require('../controllers').Contributions;

router.route('/')
  .post(ContributionController.create);

router.route('/events/:id')
  .get(ContributionController.getByEvent);
module.exports = router;
