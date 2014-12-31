var gulp = require('gulp'),
  concat = require('gulp-concat'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').concat;

gulp.task('concat', function() {
  return gulp.src(config.src)
    .pipe(concat(config.outputName))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
