'use strict';
const express = require('express');
const router = express.Router();
const EventController = require('../controllers').Events;

router.route('/')
  .post(EventController.create)
  .get(EventController.getAll);

router.route('/user')
  .get(EventController.getEventsByContributor);

router.route('/:id')
  .get(EventController.getById);

router.route('/:id')
  .get(EventController.getById);
module.exports = router;
