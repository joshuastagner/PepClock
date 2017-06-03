const email = require('./utils/email');
const models = require('../db/models');
const collections = require('./../db/collections');


class InviteWorker {
  constructor(cb) {
    this.toSendData = null;
    this.recipientVariable = null;

    this.findUnsentInvitations(cb);
  }

  work (cb) {
    this.constructRecipientVariable();
    this.sendEmail((err, success) => {
      this.updateInvitationsToSent(err, success, cb);
    });
  }

  sendEmail (cb) {
    const emails = this.toSendData.map(invitation => invitation.email);

    email.sendInvitations(this.recipientVariable, emails, cb);
  }

  constructRecipientVariable () {
    this.recipientVariable = JSON.stringify( this.toSendData.reduce((recipientVariable, invitation) => {
      recipientVariable[invitation.email] = {
        id: invitation.eventId
      };
      return recipientVariable; 
    }, {}) );
  } 

  findUnsentInvitations (cb) {
    models.Invitation.where('sent', 'false').fetchAll()
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
      invites.invokeThen('save', 'sent', 'true').then(cb('done with no errors'));
    }
  } 
}

const worker = new InviteWorker(() => { worker.work(message => console.log(message)); });

