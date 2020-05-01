const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const { config } = require('../config');

function svgSprite() {
  const options = {
    shape: {
      dimension: {
        maxWidth: 32,
        maxHeight: 32
      },
      spacing: {
        padding: 0
      },
      id: {
        generator: 'icon-'
      }
    },
    mode: {
      symbol: {
        sprite: "../sprite.symbol.svg"
      }
    }
  }

  return gulp.src(config.src.svgSprite + '/*.svg')
    .pipe($.plumber({ errorHandler: config.errorHandler }))
    .pipe($.svgSprite(options))
    .on('error', function(error) { console.log(error); })
    .pipe(gulp.dest(config.dest.images));
}

module.exports = { svgSprite }
