var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var preset = require('babel-preset-es2015');
var watchify = require('watchify');

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

//Para compilar los archivos que vemos
function compile(watch){
  var bundle = watchify(browserify('./src/index.js'));

  function rebundle(){
    bundle
      .transform(babel, preset)
      .bundle()
      .on('error', function(err){ console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  if(watch){
    bundle.on('update', function(){
      console.log('--> Construyendo...');
      rebundle();
    })
  }

  rebundle();
}
//Automatizar la construccion de nuestro codigo
gulp.task('build', function(){ return compile(); });

gulp.task('watch', function(){ return compile(true); });

gulp.task('default', ['styles', 'assets', 'build'])
