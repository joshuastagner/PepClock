const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const base32 = require('thirty-two');
const crypto = require('crypto');
const models = require('../../db/models');
const redisClient = require('redis').createClient(process.env.REDISCLOUD_URL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

module.exports.ensureTOTP = (req, res, next) => {
  if ((req.session.key && req.session.method === 'totp') || (!req.session.key && req.session.method === 'plain')) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports.redirect = (req, res) => {
  let redirect = req.session.returnTo || '/dashboard';
  delete req.session.returnTo;
  res.redirect(redirect);
};

module.exports.render = (req, res) => {
  res.render('index.ejs', {user: JSON.stringify(req.user)});
};

module.exports.twoFactorSetup = (req, res, next) => {

  let rndBytes = crypto.randomBytes(32);
  let rest = rndBytes.toString('hex').slice(6);
  req.session.key = base32.encode(rndBytes).toString().replace(/=/g, '');

  return next();
};

module.exports.setTwoFactorEnabled = (req, res, next) => {
  const userId = req.user.id;
  const fromUrl = req.route.path;
  let method = req.session.method;
  let secret = req.session.secret;

  if (fromUrl === '/noTwoFA') {
    method = 'plain';
    secret = undefined;

    models.Profile.where({id: userId}).fetch()
      .then(profile => {
        profile.set({
          two_factor_enabled: 1
        }).save();
      })
      .then(() => {
        res.redirect('/dashboard');
      });
  }

  if (fromUrl === '/yesTwoFA') {
    method = 'totp';

    models.Profile.where({id: userId}).fetch()
      .then(profile => {
        profile.set({
          two_factor_enabled: 2
        }).save();
      })
      .then(() => {
        res.redirect('/totp-setup');
      });
  }
};

module.exports.twoFactor = (req, res) => {
  const userId = req.user.id;

  models.Profile.where({id: userId}).fetch()
    .then(profile => {
      let twoFactor = profile.attributes.two_factor_enabled;
      if (twoFactor === 0) {
        res.render('twoFactorOptIn.ejs', {user: JSON.stringify(profile.attributes)});
      }
      if (twoFactor === 1) {
        res.redirect('/noTwoFA');
      }
      if (twoFactor === 2) {
        res.redirect('/yesTwoFA');
      }
    });
};

module.exports.twoFactorVerify = (req, res) => {
  let userInput = req.body['G2FA-code'];
  let expected = req.session.key;
  let rest = req.session.key.slice(6);
  let actual = userInput + rest;

  if (actual.toString('hex') === expected.toString('hex')) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/totp-input');
  }
};

module.exports.updateAndRender = (req, res) => {
  const eventId = parseInt(req.params.id);
  const inviteId = req.query.invite;
  const recipientId = req.query.recipient;

  if (inviteId) {
    return models.Invitation.where({id: inviteId}).fetch()
      .then((invitation) => {
        if (!invitation || invitation.attributes.event_id !== eventId) {
          return res.send('bad link!');
        }

        if (invitation.attributes.rsvp === 'true') {
          return res.redirect(req.path);
        }

        invitation.save('rsvp', 'true', {method: 'update'})
          .then(() => {
            return new models.Contributor({
              user_id: req.user.id,
              event_id: eventId,
              role: 'contributor'
            }).save();
          })
          .then(() => {
            res.redirect(req.path);
          });
      });
  }

  if (recipientId) {
    return models.Recipient.where({id: recipientId}).fetch()
      .then((recipient) => {
        if (!recipient || recipient.attributes.event_id !== eventId) {
          return res.send('bad link!');
        }

        if (recipient.attributes.rsvp === 'true') {
          return res.redirect(req.path);
        }

        recipient.save('viewed', true, {method: 'update'})
          .then(() => {
            return new models.Contributor({
              user_id: req.user.id,
              event_id: eventId,
              role: 'contributor'
            }).save();
          })
          .then(() => {
            // email all collaborators to let them know recipient opened link
          })
          .then(() => {
            return res.redirect(req.path);
          });
      });
  }

  res.render('index.ejs', {user: JSON.stringify(req.user)});
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: process.env.REDISCLOUD_URL,
    port: 6379
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
