'use strict';

var publicPath = 'public/',
    jsFiles = ['Gruntfile.js', 'app/**/*.js', publicPath + 'app/scripts/**/*.js'],
    PORT = process.env.PORT || 9999;

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: 'grunt-*'
    });

    grunt.initConfig({

        publicPath: publicPath,

        watch: {
            jade: {
                files: ['app/views/**/*.jade'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: jsFiles,
                tasks: ['jshint', 'mochacli'],
                options: {
                    livereload: true,
                },
            },
            compass: {
                files: '<%= publicPath %>app/styles/**/*.scss',
                tasks: ['compass:app'],
            },
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            files: jsFiles,
        },

        mochacli: {
            options: {
                bail: true,
                files: ['test/unit/*_test.js'],
            },
            spec: {
                options: {
                    reporter: 'spec',
                },
            },
        },

        compass: {
            options: {
                sassDir: '<%= publicPath %>app/styles',
                cssDir: '<%= publicPath %>.tmp/styles',
                imagesDir: '<%= publicPath %>app/images',
                generatedImagesDir: '<%= publicPath %>.tmp/images/sprites',
                javascriptsDir: '<%= publicPath %>app/scripts',
                fontsDir: '<%= publicPath %>app/fonts',
                importPath: '<%= publicPath %>app/vendor',
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= publicPath %>dist/images/sprites',
                    httpImagesPath: '/dist/images',
                    httpGeneratedImagesPath: '/dist/images/sprites',
                    httpJavascriptsPath: '/dist/scripts',
                    httpFontsPath: '/dist/fonts',
                    environment: 'production',
                    relativeAssets: false,
                },
            },
            app: {
                options: {
                    debugInfo: true,
                    assetCacheBuster: false,
                    environment: 'development',
                    relativeAssets: true,
                },
            },
        },

        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['app'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: PORT,
                    },
                    cwd: __dirname,
                },
            },
        },

        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true,
            },
        },

        bower: {
            install: {
                options: {
                    targetDir: './public/app/vendor',
                    layout: 'byComponent',
                    install: true,
                    verbose: true,
                    cleanBowerDir: true,
                },
            },
        },
    });

    grunt.registerTask('dev', ['concurrent', 'watch']);
    grunt.registerTask('test', ['jshint', 'mochacli:spec']);
    grunt.registerTask('default', ['test', 'compass:app']);
    grunt.registerTask('install', ['bower']);

};