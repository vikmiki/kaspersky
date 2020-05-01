const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const del = require('del');
const autoprefixer = require('autoprefixer');
const mergeStream = require('merge-stream');
$.sass.compiler = require('node-sass');

const { config } = require('../config');

// compile sass
function stylesCompile() {
  var plugins = [autoprefixer()];
  return gulp.src(config.src.scss)
    .pipe($.plumber({ errorHandler: config.errorHandler }))

    .pipe($.changed(config.dest.styles), { extension: '.css' })

    .pipe($.if(browserSync.active, $.cached('scss')))

    .pipe($.sassInheritance({ dir: config.src.styles, extension: '.scss', skip: 'node_modules' }))

    .pipe($.filter(function(file) {
      return !/\/_/.test(file.path) || !/^_/.test(file.relative);
    }))

    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: [config.src.styles, 'node_modules']
      })
    )
    .pipe(
      $.sass({
        outputStyle: 'compact', //nested, expanded, compact, compressed
        precision: 5,
        sourcemap: true,
        errLogToConsole: false
      })
    )
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest.styles))
    .pipe(reload({ stream: true }));
}

const styles = gulp.series(
  stylesCompile,
);

module.exports = { styles }
