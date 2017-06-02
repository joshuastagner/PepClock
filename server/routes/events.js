'use strict';
const express = require('express');
const router = express.Router();
const EventController = require('../controllers').Events;

router.route('/')
  .post(EventController.create)
  .get(EventController.getByUserId);

module.exports = router;
