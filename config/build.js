'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        dist: {
            src: ['<%= paths.dist %>']
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
            }]
        }
    },
    sass: {
        dist: {
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.dist %>/styles/main.css'
        }
    },
    autoprefixer: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/styles',
                src: '{,*/}*.css',
                dest: '<%= paths.dist %>/styles'
            }]
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
        options: {
            assetsDirs: ['<%= paths.dist %>']
        },
        js: ['<%= paths.dist %>/scripts/{,*/}*.js'],
        html: ['<%= paths.dist %>/{,*/}*.html'],
        css: ['<%= paths.dist %>/styles/{,*/}*.css']
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
    cssmin: {
        dist: {
            options: {
                banner: '/*! JSkeleton application - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/styles',
                src: 'main.css',
                dest: '<%= paths.dist %>/styles'
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
