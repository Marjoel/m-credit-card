module.exports = function(grunt) {
    'use strict';

	grunt.config('jshint', {
    	build: ['src/**/*.js'],
    	options: {
    		jshintrc: true
    	}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};