'use strict';
const express = require('express');
const router = express.Router();
const UploadController = require('../controllers').Uploads;

router.route('/')
  .post(UploadController.create)
  ;

module.exports = router;
