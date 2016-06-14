/**
 * タスク設定ファイル
 */
module.exports = {
    // 出力先ディレクトリ
    dist: 'dist/',
    // gulpコマンドでデフォルトで監視するディレクトリ(assets/*/)
    defaultPath: '',
    // サーバー設定
    server: {
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false
      }
    },
    // パス設定
    path: {
      style: {
        src: 'assets/%type%/styl/**/index.styl',
        watch: 'assets/%type%/styl/**/*.styl',
        dist: 'dist/%type%/css/**/*.css',
        dest: 'dist/%type%/css'
      },
      sprite: {
        src: 'assets/%type%/_imgSprites/**/*',
        watch: 'assets/%type%/_imgSprites/**/*',
        imageDest: 'assets/%type%/img/common',
        cssDest: 'assets/%type%/styl/common/var/'
      },
      js: {
        src: [
          'assets/%type%/js/_index.js',
          'assets/%type%/js/index.js',
          'assets/%type%/js/top.js',
          'assets/%type%/js/pageSample.js'
        ],
        dist: 'dist/%type%/js/**/*.js',
        dest: 'dist/%type%/js',
      },
      img: {
        dist: 'dist/%type%/img/**/*',
        dest: 'dist/%type%/img'
      },
      copy: [
        {
          from: 'assets/%type%/**/*.html',
          to: 'dist/%type%/'
        },
        {
          from: 'assets/%type%/img/**/*',
          to: 'dist/%type%/img'
        }
      ]
    }
};
