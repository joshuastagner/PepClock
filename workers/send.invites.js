const email = require('./utils/email');
const models = require('../db/models');
const collections = require('./../db/collections');
const _ = require('lodash');

class InviteWorker {
  constructor(cb) {
    this.toSendData = null;
    this.recipientVariable = null;

    this.findUnsentInvitations(() => {
      if (this.toSendData.length) {
        this.work(cb);
      } else {
        cb('no emails to send.');
      }
    });
  }

  work (cb) {
    this.constructRecipientVariable();
    this.sendEmail((err, success) => {
      this.updateInvitationsToSent(err, success, cb);
    });
  }

  sendEmail (cb) {
    const emails = _.uniq(this.toSendData.map(invitation => invitation.email));

    email.batchSendInvitations(this.recipientVariable, emails, cb);
  }

  constructRecipientVariable () {
    this.recipientVariable = JSON.stringify( this.toSendData.reduce((recipientVariable, invitation) => {
      if (!recipientVariable[invitation.email]) {
        recipientVariable[invitation.email] = { link: '\n 127.0.0.1:3000/events/' + invitation.eventId };
      } else {
        recipientVariable[invitation.email].link += '\n 127.0.0.1:3000/events/' + invitation.eventId;
      }
      return recipientVariable; 
    }, {}) );
  } 

  findUnsentInvitations (cb) {
    models.Invitation.where('status', 'not sent').fetchAll()
      .then(({models}) => {
        return models.map(({ attributes }) => {
          return {
            id: attributes.id,
            email: attributes.email,
            eventId: attributes.event_id
          };
        });
      })
      .then(array => {
        this.toSendData = array;
        cb();
      });
  } 
  
  updateInvitationsToSent (err, success, cb) {
    if (err) {
      cb('error!');
    } else {
      let inviteIds = this.toSendData.map(invitation => ( {id: invitation.id} ));
      let invites = collections.Invitations.forge(inviteIds);
      invites.invokeThen('save', 'status', 'sent').then(() => {
        cb('done with no errors');
      });
    }
  }

  testQuery () {
    console.log( now() );
  } 
}

const worker = new InviteWorker(message => console.log(message));

worker.testQuery;


