var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var timestamp = require('./timestamp');

gulp.task('build:js', function(){
  return gulp.src([
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './src/scripts/*.js'
  ])
    .pipe(gp_concat('concat.js'))
    .pipe(gp_uglify())
    .pipe(gp_rename('out.' + timestamp + '.js'))
    .pipe(gulp.dest('dist'));
});