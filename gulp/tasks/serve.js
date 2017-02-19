const gulp = require('gulp');
const config = require('./../config');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');


gulp.task('js-watch', ['javascripts'], () => {
     browserSync.reload();
});


gulp.task('less-watch', ['less'], () => {
    browserSync.reload();
});


gulp.task('projeto-watch', () => {
    runSequence('clonarprojeto',
                'injector',
                (error) => {
                    if(error)
                        console.log(error);
                    browserSync.reload();
                });
})

gulp.task('serve', () => {
    browserSync.init(config.browserSync);
    
    watch('src/**/(*.js|*.html)', { events: ['add', 'unlink', 'change'] }, (file) => {
        gulp.start(['js-watch']);
    }); 

    watch('src/**/*.less', { events: ['add', 'unlink', 'change'] }, (file) => {
        gulp.start(['less-watch']);
    }); 
    
    watch('src/**/!(*.less|*.js|*.html)', (file) => {
        gulp.start('projeto-watch');
    });

});
