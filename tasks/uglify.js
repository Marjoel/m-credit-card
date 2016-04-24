module.exports = function(grunt) {
    'use strict';

	grunt.config('uglify', {
    	build: {
			files: [{
				'dist/m-credit-card.min.js': [
					'src/app.js',
					'src/**/*.js'
				]
			}]
		}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};