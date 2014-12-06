/**
 * Gruntfile for Dev environment
 */

module.exports = function(grunt) {

    var NG_APP_ROOT = 'app';
    var PORT = process.env.PORT || 4000;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //grunt jshint
        jshint: {
            'ng-app': {
                files: {
                    src: [NG_APP_ROOT + '/**/*.js']
                }
            }
        },

        //grunt uglify
        uglify: {
            'ng-app': {
                options: {
                    mangle: false,
                    sourceMap: 'public/js/ng.map.js',
                    sourceMapUrl: '/js/ng.map.js'
                },
                src: [
                    NG_APP_ROOT + '/app.js',
                    NG_APP_ROOT + '/scripts/config/**/*.js',
                    NG_APP_ROOT + '/scripts/services/**/*.js',
                    NG_APP_ROOT + '/scripts/directives/**/*.js',
                    NG_APP_ROOT + '/scripts/factories/**/*.js',
                    NG_APP_ROOT + '/scripts/filters/**/*.js',
                    NG_APP_ROOT + '/scripts/providers/**/*.js',
                    NG_APP_ROOT + '/scripts/controllers/**/*.js'
                ],
                dest: 'public/js/ng.js'
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    cwd: NG_APP_ROOT + '/views/',
                    expand: true,
                    ext: ".html",
                    src: '**/*.jade',
                    dest: 'public/'
                }]
            }
        },

        cssmin: {
            'ng-app': {
                src: [ NG_APP_ROOT + '/styles/*.css'],
                dest: 'public/css/site.css'
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['jshint', 'uglify', 'jade', 'cssmin']);
};