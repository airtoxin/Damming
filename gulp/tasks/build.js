var gulp = require('gulp');

gulp.task('build', ['concat', 'browserify', 'markup', 'less', 'fonts', 'muiFonts']);
