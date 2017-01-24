'use strict';

import LessAutoprefix from 'less-plugin-autoprefix';
import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import ngAnnotate from 'browserify-ngannotate';
import ngHtml2js from 'browserify-ng-html2js';
import path from 'path';
import source from 'vinyl-source-stream';
import uglifyify from 'uglifyify';

const glp = loadPlugins();

const autoprefix = new LessAutoprefix({
  browsers: ['last 2 versions']
});

const paths = {
  src: 'src',
  dest: 'build'
};

gulp.task('less', () => gulp.src(`${paths.src}/**/*.less`)
  .pipe(glp.less({
    paths: [
      path.join(__dirname, paths.src)
    ],
    plugins: [autoprefix]
  }))
  .pipe(gulp.dest(paths.dest))
  .pipe(glp.livereload())
);

gulp.task('js', () => browserify({
    entries: ['./src/app.js']
  })
  .transform(ngHtml2js({
    module: 'templates',
    baseDir: 'src'
  }))
  .transform(babelify, {
    presets: ['es2015']
  })
  .transform(ngAnnotate)
  .transform(uglifyify)
  .bundle()
  .pipe(source('build.min.js'))
  .pipe(gulp.dest(paths.dest))
  .pipe(glp.livereload())
);

gulp.task('copyHtml', () => gulp.src(`${paths.src}/**/index.html`)
  .pipe(gulp.dest(paths.dest))
  .pipe(glp.livereload())
);

gulp.task('watch', ['less', 'js', 'copyHtml'], () => {
  glp.livereload.listen();
  gulp.watch(`${paths.src}/**/*.less`, ['less']);
  gulp.watch(`${paths.src}/**/*.{js,tmpl.html}`, ['js']);
  gulp.watch(`${paths.src}/**/index.html`, ['copyHtml']);
});

gulp.task('default', ['watch']);
