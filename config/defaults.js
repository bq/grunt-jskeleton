'use strict';

/* global module */

module.exports.tasks = {
    autoprefixer: {
        options: {
            browsers: ['last 2 version', 'ie 8', 'ie 9']
        },
    },
    libsass: {
        options: {
            loadPath: ['bower_components']
        }
    }
};