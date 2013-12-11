'use strict';

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        root: 'public/',

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: [
                'Gruntfile.js',
                'app/{,*/}*{,*/}*.js',
                '<%= root %>app/scripts/{,*/}*{,*/}*.js'
            ]
        },

        compass: {
            options: {
                sassDir: '<%= root %>app/styles',
                cssDir: '<%= root %>.tmp/styles',
                imagesDir: '<%= root %>app/images',
                generatedImagesDir: '<%= root %>.tmp/images/sprites',
                javascriptsDir: '<%= root %>app/scripts',
                fontsDir: '<%= root %>app/fonts',
                importPath: '<%= root %>app/vendor',
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= root %>dist/images/sprites',
                    httpImagesPath: '/dist/images',
                    httpGeneratedImagesPath: '/dist/images/sprites',
                    httpJavascriptsPath: '/dist/scripts',
                    httpFontsPath: '/dist/fonts',
                    environment: 'production',
                    relativeAssets: false
                }
            },
            app: {
                options: {
                    debugInfo: true,
                    assetCacheBuster: false,
                    environment: 'development',
                    relativeAssets: true
                }
            }
        }

    });

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('default', ['test', 'compass:app']);

};
