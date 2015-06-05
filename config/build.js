'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        dist: {
            src: ['<%= paths.dist %>']
        },
        svg_sprite: {
            src: ['<%= paths.dist %>/assets/svg/sprite']
        }
    },
    watchify: {
        dist: {
            src: './<%= paths.app %>/applications/index.js',
            dest: './<%= paths.dist %>/scripts/index.js'
        }
    },
    browserSync: {
        dist: {
            options: {
                server: '<%= paths.dist %>',
                port: '<%= ports.app %>'
            }
        }
    },
    copy: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>',
                src: '*.html',
                dest: '<%= paths.dist %>'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/assets',
                src: '**/*',
                dest: '<%= paths.dist %>/assets'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/resources/locales',
                src: '**/*',
                dest: '<%= paths.dist %>/resources/locales'
            }]
        }
    },
    sass: {
        dist: {
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.dist %>/styles/main.css'
        }
    },
    postcss: {
        dist: {
            src: '<%= paths.dist %>/styles/main.css'
        }
    },
    svgstore: {
        dist: {
            src: '<%= paths.dist %>/assets/svg/sprite/*.svg',
            dest: '<%= paths.dist %>/assets/svg/defs.svg'
        }
    },
    filerev: {
        dist: {
            src: [
                '<%= paths.dist %>/scripts/{,*/}*.js',
                '<%= paths.dist %>/styles/{,*/}*.css',
                '<%= paths.dist %>/assets/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                '<%= paths.dist %>/assets/fonts/{,*/}*.*',
                '<%= paths.dist %>/assets/svg/{,*/}*.*'
            ]
        }
    },
    usemin: {
        js: ['<%= paths.dist %>/scripts/*.js'],
        html: ['<%= paths.dist %>/*.html'],
        css: ['<%= paths.dist %>/styles/*.css'],
        options: {
            assetsDirs: ['<%= paths.dist %>'],
            patterns: {
                js: [
                    [/["']([^:"']+\.(?:png|gif|jpe?g|svg))(#.+)?["']/img, 'Update JavaScript with assets in strings']
                ]
            }
        }
    },
    uglify: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/scripts',
                src: 'index.js',
                dest: '<%= paths.dist %>/scripts'
            }]
        }
    },
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>',
                src: '{,*/}*.html',
                dest: '<%= paths.dist %>'
            }]
        }
    },
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/assets/images',
                src: '{,*/}*.{gif,jpeg,jpg,png}',
                dest: '<%= paths.dist %>/assets/images'
            }]
        }
    },
    svgmin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/assets/svg',
                src: '{,*/}*.svg',
                dest: '<%= paths.dist %>/assets/svg'
            }]
        }
    }
};
