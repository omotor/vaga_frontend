'use strict';

import LessAutoprefix from 'less-plugin-autoprefix';
import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
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
);

gulp.task('js', () => browserify({
    entries: ["./src/app.js"]
  })
  .transform(babelify, {
    presets: ['es2015']
  })
  .transform(uglifyify)
  .bundle()
  .pipe(source('build.min.js'))
  .pipe(glp.ngAnnotate())
  .pipe(gulp.dest(paths.dest))
);

gulp.task('templateCache', () => gulp.src(`${paths.src}/**/*.tmpl.html`)
  .pipe(glp.angularTemplatecache())
  .pipe(gulp.dest(paths.dest))
);

gulp.task('copyHtml', () => gulp.src(`${paths.src}/**/index.html`)
  .pipe(gulp.dest(paths.dest))
);

gulp.task('watch', ['less', 'js', 'templateCache', 'copyHtml'], () => {
  gulp.watch(`${paths.src}/**/*.less`, ['less']);
  gulp.watch(`${paths.src}/**/*.js`, ['js']);
  gulp.watch(`${paths.src}/**/*.tmpl.html`, ['templateCache']);
  gulp.watch(`${paths.src}/**/index.html`, ['copyHtml']);
});

gulp.task('default', ['watch']);
