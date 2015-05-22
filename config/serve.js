'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        server: {
            src: ['<%= paths.server %>']
        }
    },
    plato: {
        server: {
            files: {
                '<%= paths.server %>': ['<%= paths.app %>/applications/{,**/}*.js']
            }
        }
    },
    watchify: {
        server: {
            options: {
                debug: true
            },
            src: './<%= paths.app %>/applications/index.js',
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
                    '<%= paths.server %>/assets/**/*',
                    '<%= paths.server %>/scripts/*.js',
                    '<%= paths.server %>/*.html',
                    'Gruntfile.js'
                ]
            }
        }
    },
    watch: {
        options: {
            port: '<%= ports.livereload %>',
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },
        js: {
            files: ['<%= paths.app %>/{,**/}*.js'],
            tasks: ['newer:jshint', 'newer:jscs'],
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
        assets: {
            files: ['<%= paths.app %>/assets/**/*'],
            tasks: 'newer:copy:server'
        },
        html: {
            files: ['<%= paths.app %>/*.html'],
            tasks: ['newer:copy:server']
        }
    },
    copy: {
        server: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>',
                src: '*.html',
                dest: '<%= paths.server %>'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/assets',
                src: '**/*',
                dest: '<%= paths.server %>/assets'
            }]
        }
    },
    sass: {
        server: {
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.server %>/styles/main.css'
        }
    },
    autoprefixer: {
        server: {
            src: '<%= paths.server %>/styles/main.css',
            dest: '<%= paths.server %>/styles/main.css'
        }
    }
};
