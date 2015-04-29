'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        server: {
            src: ['<%= paths.server %>']
        }
    },
    watchify: {
        server: {
            options: {
                debug: true
            },
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
                    '<%= paths.server %>/index.html',
                    'Gruntfile.js'
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
        index: {
            files: ['<%= paths.app %>/index.html'],
            tasks: 'copy:server'
        }
    },
    concurrent: {
        server: ['libsass:server', 'copy:server', 'watchify:server', ]
    },
    copy: {
        server: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>',
                src: 'index.html',
                dest: '<%= paths.server %>'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/assets',
                src: '**/*',
                dest: '<%= paths.server %>/assets'
            }]
        }
    },
    libsass: {
        server: {
            options: {
                debugInfo: true
            },
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.server %>/styles/main.css'
        }
    },
    autoprefixer: {
        server: {
            src: '<%= paths.server %>/styles/main.css',
            dest: '<%= paths.server %>/styles/main.css'
        },
    }
};