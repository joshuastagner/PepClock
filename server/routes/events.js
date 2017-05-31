'use strict';
const express = require('express');
const router = express.Router();
const EventController = require('../controllers').Events;

router.route('/')
  .post(EventController.create);

module.exports = router;
