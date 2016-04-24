module.exports = function(grunt) {
    'use strict';
	
    grunt.loadTasks('./tasks');
	
	grunt.registerTask('build', [
		'clean',
		'uglify'
	]);
	
	grunt.registerTask('style', [
		'jshint',
		'jscs'
	]);
};
