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
            src: 'test/unit/suite.js'
        }
    },
    nightwatch: {
        options: {
            config_path: './test/selenium/config.json',
            selenium: {
                port: '<%= ports.selenium %>'
            },
            test_settings: {
                default: {
                    selenium_port: '<%= ports.selenium %>',
                }
            }
        }
    }
};
