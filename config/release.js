'use strict';

/* global module */

module.exports.tasks = {
    release: {
        /* For more options: https://github.com/geddski/grunt-release#options */
        options: {
            additionalFiles: ['bower.json'],
            indentation: '\t', //default: '  ' (two spaces)
            commitMessage: 'Release v<%= version %>', //default: 'release <%= version %>'
            tagMessage: 'v<%= version %>', //default: 'Version <%= version %>',
            tagName: 'v<%= version %>',
            npm: false // no publish
        }
    }
};
