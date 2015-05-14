'use strict';

/* global module, require */

module.exports = require('gruntfile')(function(grunt) {

    // Static mapping
    require('jit-grunt')(grunt)({
        pluginsRoot: 'node_modules/grunt-jskeleton/node_modules'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Non compatible tasks with jit-grunt
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Project settings
    var options = {

        // Configurable paths
        paths: {
            app: 'src',
            dist: 'dist',
            server: '.tmp',
            doc: 'doc'
        },
        // Configurable ports
        ports: require('./utils/ports')(grunt)
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('serve', 'Runs server for development', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'browserSync:dist']);
        }
        grunt.task.run([
            'clean:server',
            '_compile:server',
            'browserSync:server',
            'watch'
        ]);
    });

    grunt.registerTask('build', 'Generates the package for distribution', [
        'clean:dist',
        '_compile:dist',
        'filerev:dist',
        'usemin',
        'critical:dist'
    ]);


    grunt.registerTask('dist', 'Create distribution', [
        'test',
        '_package'
    ]);

    grunt.registerTask('serve:benchmark', 'Generates documentation and reports', [
        'clean:server',
        'plato:server',
        'browserSync:server',
        'watch'
    ]);

    // Internal tasks
    grunt.registerTask('_review:js', 'Internal use only', [
        'jshint',
        'jscs',
        'csslint'
    ]);
    grunt.registerTask('_minify', 'Internal use only', [
        'uglify',
        'htmlmin',
        'cssmin',
        'imagemin',
        'svgmin'
    ]);

    grunt.registerTask('_compile:dist', 'Internal use only', [
        'libsass:dist',
        'autoprefixer:dist',
        '_review:js',
        'copy:dist',
        'watchify:dist',
        '_minify',
        'critical:dist'
    ]);

    grunt.registerTask('_compile:server', 'Internal use only', [
        'libsass:server',
        'autoprefixer:server',
        '_review:js',
        'copy:server',
        'watchify:server'
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

    grunt.registerTask('test', function(type) {

        if (type === 'selenium') {
            var browser = grunt.option('browser') || 'phantomjs';
            return grunt.task.run('nightwatch:' + browser);
        }

        grunt.task.run('mochaTest');
    });

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
