'use strict';

/* global module */

module.exports.tasks = {
    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: '<%= jshint.reporter %>'
        },
        all: ['Gruntfile.js', '<%= paths.app %>/{,**/}*.js']
    },
    jscs: {
        src: '<%= paths.app %>/{,**/}*.js',
        options: {
            config: '.jscsrc',
            verbose: true // If you need output with rule names http://jscs.info/overview.html#verbose
        }
    },
    autoprefixer: {
        options: {
            browsers: ['last 2 version', 'ie 9']
        },
    },
    libsass: {
        options: {
            loadPath: ['bower_components']
        }
    }
};
