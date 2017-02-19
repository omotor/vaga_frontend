const gulp = require('gulp');
const deleteEmpty = require('delete-empty');

gulp.task('delete-empty', () => {
    return deleteEmpty.sync('./build');
});