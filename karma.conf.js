module.exports = function(config){
    config.set({
        singleRun: true,
        basePath: './',
        reporters: [
			'dots',
			'junit',
			'coverage'
		],
        files: [
			'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
			'src/app.js',
            'src/**/*.js',
			'tests/**/*.spec.js'
		],
        autoWatch: true,
        frameworks: [
			'jasmine'
		],
        browsers: [
			'PhantomJS'
		],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        preprocessors : {
            'src/**/*.js' : 'coverage'
        },
        junitReporter : {
            outputFile: '../test_out/unit.xml',
            suite: 'unit'
        },
        coverageReporter : {
            type : 'html',
            dir : 'tests/coverage/'
        }
    });
};
