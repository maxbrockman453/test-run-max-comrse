'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          '<%= project.assets %>/css/style.css':'<%= project.css %>',
        }
      }
    },
    watch: {
      sass: {
        files: ['<%= project.assets %>/sass/{,*/}*.{scss,sass}', '<%= project.assets %>/views/{,*/}*.html'],
        tasks: ['sass:dev'],
        options: {
          livereload: true
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),

    project: {
        app: ['app'],
        assets: ['<%= project.app %>/assets'],
        css: ['<%= project.assets %>/sass/style.scss']
    }

  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [
    'watch'
  ]);

};
