var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var webserver = require('gulp-webserver');
var exit = require('gulp-exit');

gulp.task('protractor', function() {
return gulp.src(["./test-e2e/*.js"])
  .pipe(protractor({
    configFile: "test-e2e/protractor.config.js",
    args: ['--baseUrl', 'http://localhost:9000']
  })).on('error', function(e) { throw e })
  .pipe(exit());
});

gulp.task('e2e-test', function() {
  runSequence(
    'webserver',
    'protractor'
    );
});


gulp.task('webserver', function() {
  gulp.src('./frontend')
    .pipe(webserver({
      livereload: true,
      port: 9000,
    }));
});
