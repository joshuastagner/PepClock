'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');
const dbUtils = require('../../db/lib/utils.js');

xdescribe('Unauthorized Routes', function() {
  it('redirects to login if not authed', function(done) {
    request(app)
      .get('/dashboard')
      .expect(302)
      .expect(function(res) {
        expect(res.header.location).to.equal('/login');
      })
      .end(done); 
  });

  it('serves homepage without auth', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect(function(res) {
        expect(res.text).to.include('<script src="/dist/bundle.js"></script>');        
      })
      .end(done);
  });

  it('redirects to login if not authed', function(done) {
    request(app)
      .get('/dashboard')
      .auth('admin@domain.com', 'admin123')
      .expect(302)
      .expect(function(res) {
        expect(res.header.location).to.equal('/login');
      })
      .end(done); 
  });
});

describe('Authorized Routes', function () {
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  const agent = request.agent(app);

  it('should redirect to /dashboard after auth', function(done) {
    agent
      .post('/login')
      .send({email: 'admin@domain.com', password: 'admin123'})
      .expect((res) => {
        expect(200);
        expect(res.header.location).to.equal('/dashboard');
      })
      .end(done);
  });

  it('should render /create if authed', function(done) {
    agent
      .get('/create')
      .expect(200)
      .end(done);
  });

  it('should render /dashbooard if authed', function(done) {
    agent
      .get('/dashboard')
      .expect(200)
      .end(done);
  });
});
