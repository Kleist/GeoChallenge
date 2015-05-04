/// <reference path="typings/node/node.d.ts"/>
var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var webserver = require('gulp-webserver');
var exit = require('gulp-exit');
var karma = require('karma').server;

gulp.task('test', ['unittest', 'server-test', 'protractor']);

gulp.task('unittest', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    browsers: ['PhantomJS'],
  }, done);
});

gulp.task('protractor', function () {
  return gulp.src(["./test-e2e/*.js"])
    .pipe(protractor({
    configFile: "test-e2e/protractor.config.js",
    args: ['--baseUrl', 'http://localhost:3000']
  })).on('error', function (e) { throw e })
    .pipe(exit()); // Exit to force webserver-shutdown
});

gulp.task('e2e-test', function () {
  runSequence(
    'serve',
    'protractor'
    );
});

gulp.task('server-test', function () {
  var jasmine = require('gulp-jasmine');
  return gulp.src('server-test/*.spec.js')
    .pipe(jasmine());
});

gulp.task('serve', function () {
  var app = require('./server/app');
  app.listen(3000);
});

gulp.task('default', ['tdd']);