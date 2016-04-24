module.exports = function(grunt) {
    'use strict';

	grunt.config('jscs', {
    	build: ['src/**/*.js'],
    	options: {
    		config: '.jscsrc'
    	}
    });

    grunt.loadNpmTasks('grunt-jscs');
};