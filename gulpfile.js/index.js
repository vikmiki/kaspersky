'use strict';
const gulp = require('gulp');

const { styles } = require('./tasks/styles')
const { views } = require('./tasks/views')
const { jsServe, jsBuild } = require('./tasks/scripts')
const { prettifyHTML } = require('./tasks/prettifyHTML')
const { clean } = require('./tasks/clean');
const { copyStatic } = require('./tasks/copyStatic');
const { svgSprite } = require('./tasks/svgSprite');
const { watch } = require('./tasks/watch');

exports.clean = clean

exports.default = exports.serve = gulp.series(
  clean,
  views,
  svgSprite,
  styles,
  jsServe,
  watch
);

exports.build = gulp.series(
  clean,
  views,
  prettifyHTML,
  svgSprite,
  styles,
  jsBuild,
  copyStatic
);

exports['soft-build'] = gulp.series(
  prettifyHTML,
  svgSprite,
  styles,
  jsBuild,
  copyStatic
);
