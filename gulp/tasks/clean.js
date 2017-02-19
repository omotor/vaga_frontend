const gulp = require('gulp');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');

gulp.task('clean', () => {
    return gulp.src('build')
            .pipe(plumber())
            .pipe(clean());
});
