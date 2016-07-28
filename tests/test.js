// tests/config.js

var config = new (require('@nodulus/config').config);

var local_config_template = require('./config/config.json');

config.mergeConfiguration(local_config_template.logs, 'logs');

var logger = require('../index').logger;

logger.error('error', 'test message %s', 'my string');
logger.warn('warn', 'test message %s', 'my string');
logger.info('info', 'test message %s', 'my string');
logger.debug('debug', 'test message %s', 'my string');
