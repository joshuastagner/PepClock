'use strict';
const express = require('express');
const router = express.Router();
const InvitationController = require('../controllers').Invitations;

router.route('/:id')
  .delete(InvitationController.delete);

router.route('/')
  .post(InvitationController.create);
module.exports = router;
