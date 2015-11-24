/* eslint-env node */

require('./config/tasks/clean');
require('./config/tasks/build-css');
require('./config/tasks/build-js');
require('./config/tasks/build-html');
require('./config/tasks/copy-resources');

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build', function(done) {
  runSequence(
    [ 'clean' ],
    [ 'build:css', 'build:js' ],
    [ 'build:html', 'copy:resources' ],
    done
  );
});