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
					reporter: 'mocha-junit-reporter',
					captureFile: 'dist/results.xml', // Optionally capture the reporter output to a file
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