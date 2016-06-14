var gulp = require('gulp');
var runSequence = require('run-sequence');

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
global.__CONFIG = tasks.config;
global.__IS_PRODUCTION = false;
global.$ = tasks.plugins;


/**
 * server
 */
gulp.task('server', function() {
  gulp.src(__CONFIG.dist)
    .pipe($.webserver({
      port: 3000,
      livereload: true,
      fallback: 'index.html',
      open: true,
      proxies: [{
        source: '/api',
        target: 'http://localhost:9000/api'
      }]
    }));
});



/**
 * watch
 */
gulp.task('watch', function () {
  gulp.watch(__CONFIG.path.style.watch, ['style']);

  var copyWatches = [];
  // 複製タスクはループで回して監視対象とする
  if (__CONFIG.path.copy) {
    __CONFIG.path.copy.forEach(function(src) {
        copyWatches.push(src.from);
    });
    gulp.watch(copyWatches, ['copy']);
  }
});

/**
 * build
 */
gulp.task('build', function (callback) {
  return runSequence(['script', 'style', 'copy'], callback);
});

/**
 * default
 */
gulp.task('default', ['clean'], function () {
  return runSequence('build', 'server',  'watch', 'watchScript');
});
