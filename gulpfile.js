var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var preset = require('babel-preset-es2015');

gulp.task('styles', function(){
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public'));
});
//tarea de pasar los assets a archivos publicos
gulp.task('assets', function(){
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
    //glob
});

//Transpila nuestro codigo para que sea compatible con todos los navegadores
gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel, preset)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['styles', 'assets', 'scripts'])
