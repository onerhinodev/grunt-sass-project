module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tasks
        sass: { // Begin Sass Plugin
            dist: {
                options: {
                    sourcemap: 'file'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: './assets/css',
                    ext: '.css'
                }]
            }
        },

        postcss: { // Begin Post CSS Plugin
            options: {
                map: {
                    inline: false
                },
                processors: [
                    require('autoprefixer')()
                ]
            },
            dist: {
                src: './assets/css/style.css'
            }
        },

        cssmin: { // Begin CSS Minify Plugin
            options: {
                sourceMap: true,
                keepSpecialComments: 0,
                level: {
                    1: {
                        specialComments: 0
                    }
                }
            },
            target: {
                files: [{
                    expand: true,
                    cwd: './assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './assets/css',
                    ext: '.min.css'
                }]
            }
        },

        
        watch: { // Compile everything into one task with Watch Plugin
            css: {
                files: '**/*.scss',
                tasks: ['css']
            }
        }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('css', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('build', ['css']);
};
