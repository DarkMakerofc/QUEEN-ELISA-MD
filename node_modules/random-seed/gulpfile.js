/*eslint no-console: 0 */
'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var isparta = require('isparta');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var files = {
	lint: ['*.js'],
	src: ['index.js'],
	test: ['test.js']
};

gulp.task('lint', function () {
	return gulp.src(files.lint)
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format('stylish'))
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});

gulp.task('test', function () {
  return gulp.src(files.src)
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(files.test, {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({
          reporter: 'spec'
        }))
        .on('error', function (err) {
          console.error(err.toString());
          this.emit('end');
        })
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov', 'json', 'text-summary']
        }));
    });
});

gulp.task('watch', function () {
	gulp.watch([files.lint], ['lint', 'test']);
});

// setup default task
gulp.task('default', ['lint', 'test', 'watch']);

// handle errors
process.on('uncaughtException', function (e) {
	console.error(e);
});
