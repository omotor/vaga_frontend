const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', () => {
    return runSequence('clean', 
                        'clonarprojeto',
                        'copiar-dependencias-js',
                        'copiar-dependencias-css',
                        // 'template-cache',
                        'javascripts',
                        'less',
                        'delete-empty',
                        'injector',
                        'serve',
                        (error) => {
                            if(error)
                                console.log(error);
                        })
});