module.exports = function(grunt) {
    'use strict';

	grunt.config('concat', {
    	build: {
			src: [
				'src/app.js',
				'src/**/*.js'
			],
			dest: 'dist/m-credit-card.js'
			
		}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};