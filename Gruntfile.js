'use strict';
/* global module, require*/

module.exports = require('gruntfile')(function(grunt) {

    require('jit-grunt')(grunt)({
        pluginsRoot: 'node_modules/grunt-jskeleton/node_modules'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Project settings
    var options = {
        // Configurable paths
        paths: {
            app: 'src',
            dist: 'dist',
            server: '.tmp'
        },
        // Configurable ports
        ports: {
            app: '9000',
            test: '9001',
            livereload: '35729'
        }
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('serve', 'Runs server for development', [
        // if (target === 'dist') {
        //     return grunt.task.run(['build', 'connect:dist:keepalive']);
        // }
        'clean:server',
        'concurrent:server',
        'autoprefixer:serve',
        'browserSync:server',
        'watch'
    ]);

    // grunt.registerTask('server', function() {
    //     grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    //     grunt.task.run(['serve']);
    // });

    // grunt.registerTask('test', function(target) {
    //     if (target !== 'watch') {
    //         grunt.task.run([
    //             'clean:server',
    //             'concurrent:test',
    //             'autoprefixer',
    //         ]);
    //     }

    //     grunt.task.run([
    //         'connect:test',
    //         'mocha'
    //     ]);
    // });

    // grunt.registerTask('build', [
    //     'clean:dist',
    //     'useminPrepare',
    //     'concurrent:dist',
    //     'autoprefixer',
    //     'concat',
    //     'cssmin',
    //     'uglify',
    //     'copy:dist',
    //     'modernizr',
    //     'rev',
    //     'usemin',
    //     'htmlmin'
    // ]);

    // grunt.registerTask('default', [
    //     'newer:jshint',
    //     'test',
    //     'build'
    // ]);

});