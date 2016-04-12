module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    var banner = ['/**',
        ' * ' + pkg.description + ' (<%= grunt.template.today("mm-dd-yyyy") %>)',
        ' * Copyright (c) <%= new Date().getFullYear() %>, marufactory',
        ' *',
        ' * @version ' + pkg.version,
        ' * @license ' + pkg.license,
        ' */',
        ''].join('\n') + '\n';

    grunt.initConfig({
        clean: {
            dist: ['dist/*']
        },
        jshint: {
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
            src: ['src/**.js']
        },
        cssmin: {
            options: {
                banner: banner,
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.css',
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                banner: banner
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'dist/',
                    ext: '.min.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'jshint', 'cssmin', 'uglify']);
};
