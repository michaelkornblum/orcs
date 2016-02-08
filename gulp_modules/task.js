import gulp from 'gulp';

export default function (obj) {
  gulp.task(obj.name, () => {
    return gulp.src(obj.src)
      .pipe(obj.proc())
      .pipe(gulp.dest(obj.dest));
  });
}
