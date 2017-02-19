const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const rename = require('gulp-rename');

gulp.task('less', () => {
    return gulp.src('./src/**/*.less', { base: undefined })
          .pipe(plumber())
          .pipe(less())
          .pipe(rename((path) => {
                path.dirname = "";
                return path;
          }))
          .pipe(gulp.dest('./build/css'));
});