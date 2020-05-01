const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const { config } = require('../config');

const prettifyHTML = () => gulp.src(config.dest.templates + '/**/*.html')
  .pipe($.htmlPrettify({ indent_char: '  ', indent_size: 1 }))
  .pipe(gulp.dest(config.dest.templates))

module.exports = { prettifyHTML }
