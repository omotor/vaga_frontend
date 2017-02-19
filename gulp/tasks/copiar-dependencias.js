const gulp = require('gulp');
const config = require('./../config');
const uglify = require('gulp-uglify');

gulp.task('copiar-dependencias-js', () => {
    return gulp.src(config.build.jsDependencies)
                .pipe(gulp.dest('build/js'));
});

gulp.task('copiar-dependencias-css', () => {
    return gulp.src(config.build.cssDependencies)
                .pipe(gulp.dest('build/css'));
});