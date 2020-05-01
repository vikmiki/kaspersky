const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const { config } = require('../config');

const { styles } = require('./styles')
const { views } = require('./views')
const { jsServe } = require('./scripts')
const { svgSprite } = require('./svgSprite');

function watch(cb) {
  browserSync.init(config.browserSync);

  // watch for changes
  gulp.watch([
    `${config.dest.root}/**/*.js`,
    `${config.src.root}/img/**/*`
  ]).on('change', reload);

  gulp.watch(config.src.js, gulp.series(jsServe));
  gulp.watch(config.src.scss, gulp.series(styles));
  gulp.watch(config.src.pug, gulp.series(views));
  gulp.watch(config.src.svgSprite + '/**/*.svg', gulp.series(svgSprite));

  cb()
}

module.exports = { watch }
