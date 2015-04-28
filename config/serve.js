'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        server: {
            src: ['<%= paths.server %>']
        }
    },
    watchify: {
        options: {
            // defaults options used in b.bundle(opts)
            detectGlobals: true,
            insertGlobals: false,
            ignoreMissing: false,
            debug: false,
            standalone: false,
            keepalive: false
        },
        server: {
            src: './<%= paths.app %>/applications/{,**/}*.js',
            dest: './<%= paths.server %>/scripts/index.js'
        }
    },
    browserSync: {
        server: {
            options: {
                watchTask: true,
                server: '<%= paths.server %>',
                port: '<%= ports.app %>'
            },
            bsFiles: {
                src: [
                    '<%= paths.server %>/styles/main.css',
                    '<%= paths.server %>/scripts/index.js',
                ]
            }
        }
    },
    watch: {
        options: {
            port: '<%= ports.livereload %>',
        },
        js: {
            files: ['<%= paths.app %>/applications/{,**/}*.js'],
            tasks: 'watchify:server',
            options: {
                spawn: false
            }
        },
        styles: {
            files: ['<%= paths.app %>/styles/{,*/}*.scss'],
            tasks: 'libsass:server',
            options: {
                spawn: false
            }
        },
        gruntfile: {
            files: ['Gruntfile.js']
        }
    },
    concurrent: {
        server: ['libsass:server', 'copy:server']
    },
    copy: {
        server: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>',
                src: 'index.html',
                dest: '<%= paths.server %>'
            }]
        }
    },
    libsass: {
        options: {
            debugInfo: true
        },
        server: {
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.server %>/styles/main.css'
        }
    }
};