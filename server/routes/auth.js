const express = require('express');
const middleware = require('../middleware');
const email = require('../../workers/utils/email');

const router = express.Router();

router.route('/')
  .get(middleware.auth.render);

router.route('/create')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/dashboard')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/edit/:id')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/events/:id')
  .get(middleware.auth.verify, middleware.auth.updateAndRender);

router.route('/redirected')
  .get(middleware.auth.render);

router.route('/runworkers')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/login/mobile')
  .post((req, res) => {
    middleware.passport.authenticate('local-login', (err, user, info) => {
      if (err) { return res.send(err); }
      if (!user) { return res.send(null); }
      req.login(user, (err) => {
        if (err) { return next(err); }
        res.send(user);
      });
    })(req, res);
  });

router.route('/login')
  .get((req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  })
  .post(middleware.passport.authenticate('local-login', {
    failureRedirect: '/login',
    failureFlash: true
  }), middleware.auth.twoFactor);

router.route('/signup')
  .get((req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  })
  .post(middleware.passport.authenticate('local-signup', {
    failureRedirect: '/signup',
    failureFlash: true
  }), middleware.auth.twoFactor);

router.route('/profile')
  .get(middleware.auth.verify, (req, res) => {
    res.render('profile.ejs', {
      user: req.user
    });
  });

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

router.get('/auth/google', middleware.passport.authenticate('google', {
  scope: ['email', 'profile']
}));

router.get('/auth/google/callback',
  middleware.passport.authenticate('google',
  { failureRedirect: '/login' }),
  middleware.auth.redirect);

router.get('/auth/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback',
  middleware.passport.authenticate('facebook',
  { failureRedirect: '/login' }),
  middleware.auth.redirect);

router.get('/auth/twitter', middleware.passport.authenticate('twitter'));

router.get('/auth/twitter/callback', middleware.passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/noTwoFA', middleware.auth.setTwoFactorEnabled);
router.get('/yesTwoFA', middleware.auth.setTwoFactorEnabled);


router.get('/totp-setup', middleware.auth.verify, middleware.auth.twoFactorSetup, (req, res) => {

  let userCode = req.session.key.slice(0,6);

  email.sendTwoFactorCode(userCode, req.user.email, (err, success) => {
    res.redirect('/totp-input');
  })
});

router.get('/totp-input', middleware.auth.verify, function(req, res) {
    if(!req.session.key) {
        console.error("Logic error, totp-input requested with no key set");
        res.redirect('/login');
    }
    // console.log(req.session.key.slice(0,6), 'THIS WILL BE SENT TO THE USER');
    res.render('totpinput.ejs');
});

router.post('/totp-input', middleware.auth.twoFactorVerify, function(req, res) {
  res.render('index.ejs', {user: req.user});
});





module.exports = router;
