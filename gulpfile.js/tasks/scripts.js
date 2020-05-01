const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const named = require('vinyl-named');
const mergeStream = require('merge-stream');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('../../webpack.config.js')

const { config } = require('../config');

const entrys = [`${config.src.js}`]

// view and check scripts
const scripts = function() {
    webpackConfig.mode = 'development'
    webpackConfig.devtool = 'eval-source-map'

    return gulp.src(entrys)
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        // .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.dest.js));
}

const scriptsBuild = function() {
    return gulp.src(entrys)
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        // .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.dest.js));
};

const jsServe = gulp.series(
    scripts,
);

const jsBuild = gulp.series(
    scriptsBuild,
);

module.exports = { jsServe, jsBuild }
