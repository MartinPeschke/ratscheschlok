/* eslint-env node */
var gulp = require('gulp');

gulp.task('copy:resources', function() {
  return gulp.src('./src/*.png')
    .pipe(gulp.dest('./dist'));
});
