const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient(process.env.REDISCLOUD_URL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  
  req.session.returnTo = req.path;
  res.redirect('/login');
};

module.exports.redirect = (req, res) => {
  let redirect = req.session.returnTo || '/';
  delete req.session.returnTo;
  res.redirect(redirect);
};

module.exports.render = (req,res) => {
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
