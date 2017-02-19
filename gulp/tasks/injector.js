const gulp = require('gulp');
const inject = require('gulp-inject');
const plumber = require('gulp-plumber');
const config = require('./../config');

gulp.task('injector', () => {
    let files = config.build.jsDependencies.map((file) =>{
                    let fileSplit = file.split('/');
                    return 'build/js/' + fileSplit[fileSplit.length - 1];
                })
                .concat('build/js/' + config.build.jsFileUglyfied)
                .concat(config.build.cssDependencies.map((file) =>{
                    let fileSplit = file.split('/');
                    return 'build/css/' + fileSplit[fileSplit.length - 1];
                }))
                .concat('build/css/*.css');


    const source = gulp.src(files, { read : false });
    return gulp.src('build/index.html')
                .pipe(plumber())
                .pipe(inject(source, { relative: true }))
                .pipe(gulp.dest('./build'));
});