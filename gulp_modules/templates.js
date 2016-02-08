import gulp from 'gulp';
import lazypipe from 'lazypipe';
import task from './task';
import watch from './watch';

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

task(obj);
watch(obj);
