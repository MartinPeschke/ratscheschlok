/* eslint-env node */

require('./config/tasks/clean');
require('./config/tasks/build-css');
require('./config/tasks/build-html');

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build', function(done) {
  runSequence(
    [ 'clean' ],
    [ 'build:css' ],
    'build:html',
    done
  );
});