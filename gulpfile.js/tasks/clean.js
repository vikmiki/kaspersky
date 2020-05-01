const del = require('del');
const { config } = require('../config');

function clean () {
  return del([config.dest.root])
}

module.exports = { clean }
