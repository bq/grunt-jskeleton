'use strict';
/* global module, require*/

module.exports = require('gruntfile')(function(grunt) {

    require('jit-grunt')(grunt)({
        pluginsRoot: 'node_modules/grunt-jskeleton/node_modules'
    });

    require('./lib/grunt-app')(grunt);
    // require('./lib/grunt-deploy')(grunt);
    // require('./lib/grunt-release')(grunt);
    // require('./lib/grunt-test')(grunt);

});
