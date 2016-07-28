var winston = require('winston');
var config = new (require('@nodulus/config').config);
var fs = require('fs');
var path = require('path');
if (!config.logs) {
    var local_config_template = require('./templates/config.json');
    config.mergeConfiguration(local_config_template.logs, 'logs');
}
//prepare objects from config
var transports = [];
for (var i = 0; i < config.appSettings.logs.transports.length; i++) {
    var config_transport = config.appSettings.logs.transports[i];
    if (config_transport.filename) {
        var dir = path.dirname(path.resolve(config_transport.filename));
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }
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
