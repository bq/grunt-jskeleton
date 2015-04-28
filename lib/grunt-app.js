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
            },
            js: {
                files: ['<%= settings.src %>/applications/{,**/}*.js'],
                tasks: 'watchify:dev',
                options: {
                    spawn: false
                }
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
                // callback: function(b) {
                //     // configure the browserify instance here
                //     b.add();
                //     b.require();
                //     b.external();
                //     b.ignore();
                //     b.transform();

                //     // return it
                //     return b;
                // }
            },
            dev: {
                src: './<%= settings.src %>/applications/{,**/}*.js',
                dest: './<%= settings.dev %>/scripts/index.js'
            }
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
        'watchify',
        'browserSync:dev',
        'watch'
    ]);
};