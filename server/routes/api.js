'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/events')
  .post((req, res) => {
    console.log('ROUTES API EVENTS POST req.body', req.body);
    console.log('ROUTES API EVENTS POST req.session', req.session);
  });

module.exports = router;
