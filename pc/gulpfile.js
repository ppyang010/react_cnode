var gulp = require('gulp'),// 必须先引入gulp插件
	connect = require('gulp-connect'),//用于创建本地服务器
	browserify = require('gulp-browserify'),//js服务端代码在浏览器端可用
	concat = require('gulp-concat'),// 合并文件
	webpack=require('gulp-webpack'),
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
    gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./*.html',['html']);
});
// 默认任务
gulp.task('default',['browserify','connect']);
gulp.task('b',['browserify']);
gulp.task('w',['webpack']);
//开发环境
gulp.task('dev',['webpack','connect','watch'])
