'use strict';

/* global require, module */
var jshintStylish = require('jshint-stylish'),
    debowerify = require('debowerify');

module.exports.tasks = {
    watchify: {
        options: {
            callback: function(b) {
                b.transform(debowerify);
                return b;
            }
        }
    },
    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: jshintStylish
        },
        all: ['Gruntfile.js', '<%= paths.app %>/{,**/}*.js']
    },
    jscs: {
        options: {
            config: '.jscsrc',
            verbose: true // If you need output with rule names http://jscs.info/overview.html#verbose
        },
        src: '<%= paths.app %>/{,**/}*.js',
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        src: ['<%= paths.server %>/styles/{,**/}*.css']
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
