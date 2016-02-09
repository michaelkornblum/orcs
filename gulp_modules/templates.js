import lazypipe from 'lazypipe';
import GulpObject from './GulpObject';
let plugin = require('gulp-load-plugins')();

let obj = {
  name: 'templates',
  src: [
    './templates/**/*.jade',
    '!templates/layouts/**/*.jade'
  ],
  proc: lazypipe()
    .pipe(plugin.jade, {pretty: true})
  ,
  dest: './build',
  watchDir: './templates/**/*'
}

let templates = new GulpObject(obj);
templates.task();
templates.watch();
