const execSync = require('node:child_process').execSync;

module.exports = function (grunt) {
  'use strict';

  function readGit(command, fallback) {
    try {
      return execSync(command, { stdio: ['ignore', 'pipe', 'ignore'] })
        .toString()
        .trim() || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function resolveBuildMeta() {
    const pkg = grunt.file.exists('package.json') ? grunt.file.readJSON('package.json') : {};
    const fallbackVersion = pkg.version || '0.0.0';
    const fallbackDate = grunt.template.today('yyyy-mm-dd HH:MM:ss');

    const tag = readGit('git describe --tags --abbrev=0', fallbackVersion);
    const tagDate = readGit(
      `git log -1 --date=format:"%Y-%m-%d %H:%M:%S" --format=%ad ${tag}`,
      fallbackDate
    );

    return {
      version: tag,
      date: tagDate
    };
  }

  grunt.initConfig({
    meta: {
      version: '',
      date: ''
    },
    concat: {
      options: {
        separator: '\n\n',
        process: function (src) {
          return src
            .replace(/@VERSION/g, grunt.config.get('meta.version'))
            .replace(/@DATE/g, grunt.config.get('meta.date'));
        }
      },
      js: {
        src: [
          'src/js/**/*.js'
        ],
        dest: 'dist/jquery.qtip.js'
      },
      css: {
        src: [
          'src/css/**/*.css'
        ],
        dest: 'dist/jquery.qtip.css'
      }
    },
    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['src/css/**/*.css'],
        tasks: ['concat:css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('git-meta', function () {
    const meta = resolveBuildMeta();
    grunt.config.set('meta.version', meta.version);
    grunt.config.set('meta.date', meta.date);
    grunt.log.writeln(`Using version: ${meta.version}`);
    grunt.log.writeln(`Using date: ${meta.date}`);
  });

  grunt.registerTask('build', ['git-meta', 'concat']);
  grunt.registerTask('default', ['build']);
};
