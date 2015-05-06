'use strict';

/* global module */

module.exports.tasks = {

    mochaTest: {
        test: {
            options: {
                reporter: 'nyan',
                captureFile: 'results.txt',
                quiet: false,
                clearRequireCache: false
            },
            src: ['test/suite.js']
        }
    }

};
