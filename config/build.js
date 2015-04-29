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
            options: {
                keepalive: true
            },
            src: './<%= paths.app %>/{,**/}*.js',
            dest: './<%= paths.dist %>/scripts/index.js'
        }
    },
    concurrent: {
        dist: ['libsass:dist', 'copy:dist', 'imagemin:dist', 'svgmin:dist']
    },
    copy: {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= paths.app %>',
                dest: '<%= paths.dist %>',
                src: [
                    '*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.webp', '{,*/}*.html', 'styles/fonts/{,*/}*.*',
                    'bower_components/sass-bootstrap/fonts/*.*'
                ]
            }]
        },
        styles: {
            expand: true,
            dot: true,
            cwd: '<%= paths.app %>/styles',
            dest: '.tmp/styles/',
            src: '{,*/}*.css'
        }
    },
    rev: {
        dist: {
            files: {
                src: [
                    '<%= paths.dist %>/scripts/{,*/}*.js', '<%= paths.dist %>/styles/{,*/}*.css',
                    '<%= paths.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}', '<%= paths.dist %>/styles/fonts/{,*/}*.*'
                ]
            }
        }
    },
    usemin: {
        options: {
            assetsDirs: ['<%= paths.dist %>']
        },
        html: ['<%= paths.dist %>/{,*/}*.html'],
        css: ['<%= paths.dist %>/styles/{,*/}*.css']
    },
    htmlmin: {
        dist: {
            options: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true, // revisar con data-penguin
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            },
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>',
                src: '{,*/}*.html',
                dest: '<%= paths.dist %>'
            }]
        }
    },
    libsass: {
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
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>/assets/img',
                src: '{,*/}*.{gif,jpeg,jpg,png}',
                dest: '<%= paths.dist %>/images'
            }]
        }
    },
    svgmin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>/assets/svg',
                src: '{,*/}*.svg',
                dest: '<%= paths.dist %>/svg'
            }]
        }
    },
};
