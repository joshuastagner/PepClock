require('dotenv').config();
const axios = require('axios');

exports.sendToRecipient = (link, email, cb) => {
  axios({
    method: 'POST',
    url: 'https://api:' + process.env.MAILGUN_API_KEY + '@api.mailgun.net/v3/app6ac6b571b02e4efcbbba7f891d5131b0.mailgun.org/messages',
    params: {
      from: 'Josh <josh@app6ac6b571b02e4efcbbba7f891d5131b0.mailgun.org>',
      to: email,
      subject: 'PepClock tolls for Thee!',
      text: 'You have Pep over at PepClock: ' + link
    }
  })
  .then(response => cb())
  .catch(err => cb('ERROR!'));
};

exports.sendInvitations = (recipientVariable, emails, cb) => {
  axios({
    method: 'POST',
    url: 'https://api:' + process.env.MAILGUN_API_KEY + '@api.mailgun.net/v3/app6ac6b571b02e4efcbbba7f891d5131b0.mailgun.org/messages',
    params: {
      from: 'Josh <josh@app6ac6b571b02e4efcbbba7f891d5131b0.mailgun.org>',
      to: emails,
      'recipient-variables': recipientVariable,
      subject: 'Contribute some Pep to your Friend',
      text: 'Your friends are building love for your friend. Join in over at PepClock: 127.0.0.1:3000/events/%recipient.id%'
    } 
  })
  .then(response => cb())
  .catch(response => cb('ERROR!'));
};


// for testing workers
exports.fakeSend = (link, email, cb) => {
  console.log('link ==>', link);
  console.log('email ==>', email);
  setTimeout(() => { cb('sent!'); }, 500);
};



