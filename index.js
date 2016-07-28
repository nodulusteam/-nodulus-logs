var winston = require('winston');
var config = new (require('@nodulus/config').config);
if (!config.logs) {
    var local_config_template = require('./templates/config.json');
    config.mergeConfiguration(local_config_template.logs, 'logs');
}
//prepare objects from config
var transports = [];
for (var i = 0; i < config.appSettings.logs.transports.length; i++) {
    var config_transport = config.appSettings.logs.transports[i];
    var l = new (eval(config_transport.type + ''))({
        name: config_transport.name,
        filename: config_transport.filename,
        level: config_transport.level
    });
    transports.push(l);
}
var logger = new (winston.Logger)({
    transports: transports
});
exports.logger = logger;
