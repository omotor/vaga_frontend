const gulp = require('gulp');

gulp.task('clonarprojeto', () => {
    return gulp.src(['src/**/!(*.js|*.less|*.html)', 'src/index.html'])
                .pipe(gulp.dest('build'));
});
