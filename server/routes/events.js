'use strict';
const express = require('express');
const router = express.Router();
const EventController = require('../controllers').Events;

router.route('/')
  .post(EventController.create)
  .get(EventController.getAll);

router.route('/users')
  .get(EventController.getEventsByContributor);

router.route('/:id')
  .get(EventController.getById)
  .put(EventController.update);

router.route('/test')
  .get(() => {
    res.send('That is terrible joey!');
  });

module.exports = router;
