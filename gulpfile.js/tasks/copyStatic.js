const gulp = require('gulp');
const { config } = require('../config');

const copyStatic = () => gulp.src(config.src.static + '/**/*.*')
	.pipe(gulp.dest(config.dest.root));

module.exports = { copyStatic }
