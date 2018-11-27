module.exports = function(grunt) {

  // Project configuration.
  	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
	  		build: {
				src: 'js/*.js',
				dest: 'dist/min.js'
	  		}
		},
		watch: {
	  		scripts: {
				files: ['js/*.js'],
				tasks: ['uglify'],
				options: {
		  			spawn: false,
				},
	  		},
		},
		mochaTest: {
		test: {
			options: {
				reporter: 'spec',
				captureFile: 'dist/log.log', // Optionally capture the reporter output to a file
				quiet: false, // Optionally suppress output to standard out (defaults to false)
				clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
				clearCacheFilter: (key) => true, // Optionally defines which files should keep in cache
				noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
			},
				src: ['test/**/*.js']
			}
		}
  	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');


	// Default task(s).
	grunt.registerTask('default', ['uglify', 'watch']);
	grunt.registerTask('mocha', 'mochaTest');

};