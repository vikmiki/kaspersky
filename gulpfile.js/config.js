const SRC = 'src'
const DEST = 'dist'

const config = {
  src: {
    root: `${SRC}`,
    templates: `${SRC}/templates`,
    pug: `${SRC}/templates/**/*.pug`,
    styles: `${SRC}/styles`,
    scss: `${SRC}/styles/**/*.{sass,scss}`,
    js: `${SRC}/scripts/**/*.js`,
    static: `${SRC}/static`,
    svgSprite: `${SRC}/svg-sprite`,
  },
  dest: {
    root: `${DEST}`,
    templates: `${DEST}`,
    styles: `${DEST}`,
    js: `${DEST}/js`,
    images: `${DEST}/img`,
  },
  browserSync: {
    reloadOnRestart: true,
    notify: false,
    startPath: "/",
    server: {
      baseDir: [`${SRC}`, `${SRC}/static`, `${DEST}`]
    }
  },
  errorHandler: require('./utils/errorHandler')
}

module.exports = { config };
