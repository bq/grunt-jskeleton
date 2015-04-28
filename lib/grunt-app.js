module.exports = function(grunt) {

    grunt.initConfig({

        settings: {
            dev: 'target/dev',
            dist: 'target/dist',
            target: 'target',
            src: 'src'
        },

        browserSync: {
            dev: {
                options: {
                    watchTask: true,
                    server: '<%= settings.dev %>'
                },
                bsFiles: {
                    src: [
                        '<%= settings.dev %>/styles/main.css',
                        '<%= settings.dev %>/scripts/index.js',
                    ]
                }
            }
        },

        clean: {
            dev: {
                src: ['<%= settings.dev %>']
            },
            dist: {
                src: ['<%= settings.dist %>']
            },
            all: {
                src: ['<%= settings.target %>']
            }
        },

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.src %>/',
                    src: 'index.html',
                    dest: '<%= settings.dev %>/'
                }]
            }
        },

        libsass: {
            options: {
                loadPath: ['bower_components']
            },
            dev: {
                src: 'src/styles/main.scss',
                dest: '<%= settings.dev %>/styles/main.css'
            }
        },

        watch: {
            styles: {
                files: ['<%= settings.src %>/styles/{,*/}*.scss'],
                tasks: 'libsass:dev',
                options: {
                    spawn: false
                }
            }
        },

        watchify: {

        }

    });

    grunt.registerTask('compile', 'internal use only', function(env) {

        if (env === 'dev') {
            grunt.task.run([
                'libsass:dev'
                // 'watchify'
            ]);
        }

    });

    grunt.registerTask('serve', 'Runs server for development', [
        'clean:all',
        'copy:dev',
        'compile:dev',
        'browserSync:dev',
        'watch'
    ]);
};