require('dotenv').config();
const axios = require('axios');


exports.sendToRecipient = (link, email) => {
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
  .then(response => console.log(response.data))
  .catch(err => console.log(err));
};

exports.sendInvitation = (link, emails) => {
  axios({
    method: 'POST',
    url: 'https://api:' + process.env.MAILGUN_API_KEY + '@api.mailgun.net/v3/app6ac6b571b02e4efcbbba7f891d5131b0.mailgun.org/messages',
    params: {
      from: 'Josh <josh@app6ac6b571b02e4efcbbba7f891d5131b0.mailgun.org>',
      to: emails,
      subject: 'Contribute some Pep to your Friend',
      text: 'Your friends are sending love to your friend. Join in over at PepClock: ' + link
    } 
  })
  .then(response => console.log(response.data))
  .catch(response => console.log(err));
};



