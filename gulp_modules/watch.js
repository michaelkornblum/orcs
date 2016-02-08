import gulp from 'gulp';
let plugin = require('gulp-load-plugins')();

export default function(obj) {
  gulp.task('watch:' + obj.name, () => {
    return gulp.src(obj.watchDir)
      .pipe(plugin.watch(obj.watchDir, () => {
        gulp.start(obj.name)
      }));
  });
};
