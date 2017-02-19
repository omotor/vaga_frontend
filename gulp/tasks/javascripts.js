const uglify = require('gulp-uglify');
const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const config = require('./../config');
const merge = require('merge-stream');
const templateCache = require('gulp-angular-templatecache');


gulp.task('javascripts', () => {

    let prepareTemplates = () => {
        return gulp.src(['./src/**/*.html', '!src/index.html'])
                   .pipe(templateCache('templates.js', { standalone: true }))
    };

    return merge(gulp.src(config.build.jsFiles), prepareTemplates())
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(concat(config.build.jsFileUglyfied))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./build/js'));
});