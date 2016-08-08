// tests/config.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

describe('logs', function () {
  it('getSubtotal() should return 0 if no items are passed in', function () {


    var config = require('@nodulus/config').config;
    var local_config_template = require('./config/config.json');
    config.mergeConfiguration(local_config_template.logs, 'logs');
    var logger = require('../index').logger;

    logger.error('error', 'test message %s', 'my string');
    logger.warn('warn', 'test message %s', 'my string');
    logger.info('info', 'test message %s', 'my string');
    logger.debug('debug', 'test message %s', 'my string');



    expect(logger).to.not.equal(undefined);
  });
});