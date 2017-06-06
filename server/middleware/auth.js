const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const models = require('../../db/models');
const redisClient = require('redis').createClient(process.env.REDISCLOUD_URL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

module.exports.redirect = (req, res) => {
  let redirect = req.session.returnTo || '/';
  delete req.session.returnTo;
  res.redirect(redirect);
};

module.exports.render = (req, res) => {
  res.render('index.ejs', {user: JSON.stringify(req.user)});
};

module.exports.updateAndRender = (req, res) => {
  if (req.query.invite) {
    const inviteId = req.query.invite;
    const eventId = req.params.id;
    
    models.Invitation.where({id: inviteId}).fetch()
      .then((model) => {
        if (eventId !== model.attributes.event_id) {
          model.save('rsvp', 'true', {method: 'update'})
            .then(() => {
              new models.Contributor({
                user_id: req.user.id,
                event_id: eventId,
                role: 'contributor'
              }).save();
            })
            .then(() => {
              let redirect = '/events/' + eventId;
              delete req.session.returnTo;
              res.redirect(redirect);
            });
        } else {
          res.send('We are on to you!!!!');
        }
      });
  } else {
    res.render('index.ejs', {user: JSON.stringify(req.user)});
  }
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
