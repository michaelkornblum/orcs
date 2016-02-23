import lazypipe from 'lazypipe';
import GulpObject from './GulpObject';
let plugin = require('gulp-load-plugins')();
let pngquant = require('imagemin-pngquant');

let obj = {
  name: 'images',
  src: './images/*',
  proc: lazypipe()
    .pipe(plugin.imagemin, {
      progressive: true,
      svgoPlugins:[{removeViewBox: false}],
      optimizationLevel: 3,
      use: [pngquant()]
    })
  ,
  dest: './build/images',
  watchDir: './images/*'
}

let images = new GulpObject(obj);
images.task();
images.watch();
