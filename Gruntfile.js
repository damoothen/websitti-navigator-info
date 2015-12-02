module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            js: {
                files: {
                    src: ['src/js/**/*.js']
                }
            }
        },

        uglify: {
            min: {
                files: {
                    'dist/js/navigator-info.min.js': ['src/js/navigator-info.js']
                }
            }
        },

        clean: {
            dist: ['dist']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('dist', ['clean', 'jshint', 'uglify']);

};
