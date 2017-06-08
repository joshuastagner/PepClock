require('dotenv').config();
const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');
const dbUtils = require('../../db/lib/utils.js');
const models = require('../../db/models');
const EventController = require('../controllers/events');
const events = require('events');

const buildResponse = function() {
  return httpMocks.createResponse({eventEmitter: events.EventEmitter});
};

describe('Events Controller', function() {
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  var date = new Date(1498173960000);

  it('should add event into database', function(done) {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/create',
      body: {
        eventName: 'Gary opens a pizza shop',
        firstName: 'Gary',
        lastName: 'Pepperoni',
        email: 'pizza@yum.com',
        deliveryTime: 1498184880000,
        inviteEmails: ['test@gmail.com', 'test1@gmail.com'] 
      },
      session: {
        passport: {
          user: 1
        }
      }
    });

    const response = buildResponse();

    response.on('end', function() {
      const data = response._getData();
      expect(data.attributes.title).to.equal('Gary opens a pizza shop');
      done();
    });

    EventController.create(request, response);
  });  
});

