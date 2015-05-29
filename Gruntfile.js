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
        // Package.json
        pkg: grunt.file.readJSON('package.json'),
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
            'env:browser',
            '_compile:server',
            'browserSync:server',
            'watch'
        ]);
    });

    grunt.registerTask('build', 'Generates the package for distribution', [
        'clean:dist',
        'env:browser',
        '_compile:dist',
        'filerev:dist',
        'usemin'
    ]);

    grunt.registerTask('serve:benchmark', 'Generates documentation and reports', [
        'clean:server',
        'env:browser',
        'plato:server',
        'browserSync:server',
        'watch'
    ]);

    grunt.registerTask('test', function(type) {

        if (type === 'selenium') {
            var browser = grunt.option('browser') || 'phantomjs';
            return grunt.task.run('nightwatch:' + browser);
        }

        grunt.task.run('mochaTest');
    });

    grunt.registerTask('deploy', function(env) {

        var environment = env || 'integration';

        var configFile = grunt.option('config') || 'src/resources/config/' + environment + '/config.json';
        var configData = grunt.file.readJSON(configFile);

        grunt.config.set('aws_s3.deploy.options', configData.deploy);

        // Check if build task has been runned
        grunt.task.requires('build');

        // Run deploy task
        grunt.task.run('aws_s3');
    });

    // Internal tasks
    grunt.registerTask('_review:js', 'Valids the code (internal use only)', [
        'jshint',
        'csslint'
    ]);

    grunt.registerTask('_minify', 'Minifiy the code and assets (internal use only)', [
        'uglify',
        'htmlmin',
        'cssmin',
        'imagemin',
        'svgmin'
    ]);

    grunt.registerTask('_compile:dist', 'Build compile process (internal use only)', [
        'sass:dist',
        'autoprefixer:dist',
        '_review:js',
        'copy:dist',
        'svgstore:dist',
        'watchify:dist',
        '_minify'
    ]);

    grunt.registerTask('_compile:server', 'Server compile process (internal use only)', [
        'sass:server',
        'autoprefixer:server',
        '_review:js',
        'copy:server',
        'svgstore:server',
        'watchify:server'
    ]);

});
