'use strict';
const express = require('express');
const router = express.Router();
const WorkerController = require('../controllers/workers');

router.route('/invites')
  .get(WorkerController.sendInvites);

router.route('/recipients')
  .get(WorkerController.sendRecipientLinks);

module.exports = router;
