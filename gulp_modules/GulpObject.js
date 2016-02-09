import gulp from 'gulp';
let plugin = require('gulp-load-plugins')();

export default class GulpObject {
  constructor(obj) {
    this.name = obj.name;
    this.src = obj.src;
    this.proc = obj.proc;
    this.dest = obj.dest;
    this.watchDir = obj.watchDir;
  }

  task() {
    return gulp.task(this.name, () => {
      gulp.src(this.src)
        .pipe(this.proc())
        .pipe(gulp.dest(this.dest))
    })
  }

  watch() {
    return gulp.task('watch:' + this.name, () => {
      gulp.src(this.watchDir)
        .pipe(plugin.watch(this.watchDir, () => {
          gulp.start(this.name)
        }))
    })
  }
}
