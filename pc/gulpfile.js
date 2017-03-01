var gulp = require('gulp'),// 必须先引入gulp插件
	connect = require('gulp-connect'),//用于创建本地服务器
	browserify = require('gulp-browserify'),//js服务端代码在浏览器端可用
	concat = require('gulp-concat'),// 合并文件
	webpack=require('gulp-webpack'),
    jshint = require('gulp-jshint'), // js 语法校验
    uglify = require('gulp-uglify'), // js 压缩
    cssnano = require('gulp-cssnano'), // CSS 压缩
    autoprefixer = require('gulp-autoprefixer'), // 添加 CSS 浏览器前缀
    rename = require('gulp-rename'), // 重命名
    filter = require('gulp-filter'), // 过滤筛选指定文件
    cached = require('gulp-cached'), // 缓存当前任务中的文件，只让已修改的文件通过管道
	port = process.env.port || 5000;

//js代码转换
gulp.task('browserify',function(){
    gulp.src('./src/js/main.js')
    .pipe(browserify({
        transform:'reactify'
    }))
    .pipe(gulp.dest('./dist/js'));//写文件
});

//新的编译方式  使用webpack的方式
gulp.task('webpack', function(callback) {
  return gulp.src('./src/js/main.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('./'));//webpack config 中还有一个地址
});
// css 压缩（拷贝 *.min.css，常规 CSS 则输出压缩与未压缩两个版本）
gulp.task('css_comp', function() {
  return gulp.src('./src/css/**/*.css')
    .pipe(cached('css'))
    .pipe(gulp.dest('./src/css/**/*.css')) // 把管道里的所有文件输出到 dist/css 目录
    .pipe(filter(['**/*', '!**/*.min.css'])) // 筛选出管道中的非 *.min.css 文件
    // .pipe(autoprefixer('last 6 version'))
    // .pipe(gulp.dest('./dist/css')) // 把处理过的 css 输出到 dist/css 目录
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'))
});

// js压缩（拷贝 *.min.js，常规 js 则输出压缩与未压缩两个版本）
gulp.task('js_comp', function() {
  return gulp.src(['./dist/js/**/*.js'])
    .pipe(cached('js_comp'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(filter(['**/*', '!**/*.min.js'])) // 筛选出管道中的非 *.min.js 文件
    // .pipe(jshint('.jshintrc')) // js的校验与合并，根据需要开启
    // .pipe(jshint.reporter('default'))
    // .pipe(concat('main.js'))
    // .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});
 

//开启一个服务器 并实时刷新
//live reload
gulp.task('connect',function(){
    connect.server({
        root:'./',
        port:port,
        livereload:true
    })
});

//reload
gulp.task('js',function(){
    gulp.src('./dist/js/*.js')
    .pipe(connect.reload());
});
gulp.task('html',function(){
    gulp.src('./src/*.html')
    .pipe(connect.reload());
});


// watch 监听文件变化
gulp.task('watch',function(){
	// gulp.watch('./src/**/*.js',['browserify']);
	gulp.watch('./src/**/*.js',['webpack']);
    // gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./*.html',['html']);
});



// 默认任务
gulp.task('default',['browserify','connect']);
gulp.task('b',['browserify']);
gulp.task('w',['webpack']);
//开发环境
gulp.task('dev',['webpack','connect','watch'])
