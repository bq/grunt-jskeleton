var through = require('through');

module.exports = function(file) {

    var env = process.env.environment || 'dev';
    var data = '';

    return through(write, end);

    function write(buf) {
        data += buf;
    }

    function end() {
        this.queue(data.replace('resources/config/dev/config.json', 'resources/config/' + env + '/config.json'));
        this.queue(null);
    }
};
