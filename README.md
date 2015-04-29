# grunt-jskeleton

> Indirect gruntfile for JSkeleton applications.



## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jskeleton --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
module.exports = function(grunt) {

    // Init main modular gruntfile and return the tasks
    require('grunt-jskeleton')(grunt);

    grunt.config.merge({
        // Include here your plugins configuration
    });

    // Custom tasks
    grunt.registerTask('task-name', []);
};
```


Also, you can have this indirect Gruntfile, using the [generator-jskeleton](https://github.com/bq/generator-jskeleton).

## Usage

#### grunt serve
Runs server for development.

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
