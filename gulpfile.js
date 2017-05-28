var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')

gulp.task('styles', function(){
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public'));
})
//tarea de pasar los assets a archivos publicos
gulp.task('assets', function(){
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
    //glob
})

gulp.task('default', ['styles', 'assets'])
