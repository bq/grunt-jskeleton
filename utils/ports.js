/*
    Exports application ports, randomized if "--random-ports" option is used with any grunt task.
 */

var randomIntInc = function(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
};

var randomPort = function() {
    return randomIntInc(34000, 61000);
};

module.exports = function(grunt) {

    // Port configuration
    var LIVERELOAD_PORT = grunt.option('random-ports') ? randomPort() : 35729;
    var SERVER_PORT = grunt.option('random-ports') ? randomPort() : 9000;
    var SERVER_TEST_PORT = grunt.option('random-ports') ? randomPort() : 9001;
    var SELENIUM_PORT = grunt.option('random-ports') ? randomPort() : 4444;

    return {
        app: SERVER_PORT,
        test: SERVER_TEST_PORT,
        livereload: LIVERELOAD_PORT,
        selenium: SELENIUM_PORT
    };
}
