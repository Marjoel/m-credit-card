module.exports = function(grunt) {
    'use strict';

	grunt.config('clean', {
    	build: [
			'dist/'
		]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};