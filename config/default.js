'use strict';

/* global require, module */
var jshintStylish = require('jshint-stylish');
var debowerify = require('debowerify');
var htmlbarsify = require('htmlbarsify');
var envReplace = require('../utils/replace');

module.exports.tasks = {
    watchify: {
        options: {
            callback: function(b) {
                return b.transform(debowerify).transform(htmlbarsify).transform(envReplace);
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
        src: '<%= paths.app %>/{,**/}*.js'
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
        }
    },
    sass: {
        options: {
            includePaths: ['bower_components']
        }
    },
    svgstore: {
        options: {
            cleanup: true,
            cleanupdefs: true,
            includedemo: false,
            preserveDescElement: false,
            prefix: 'icon-',
            svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
                viewBox: '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg'
            }
        }
    }
};