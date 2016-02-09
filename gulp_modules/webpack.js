import lazypipe from 'lazypipe';
import GulpObject from './GulpObject';
let plugin = require('gulp-load-plugins')();

let obj = {
  name: 'webpack',
  src: './scripts/app.js',
  proc: lazypipe()
    .pipe(plugin.webpack, require('../webpack.config.js'))
  ,
  dest: './build',
  watchDir: './scripts/**/*'
}

let webpack = new GulpObject(obj);
webpack.task();
webpack.watch();
