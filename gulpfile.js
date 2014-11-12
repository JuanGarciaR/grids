var gulp   = require('gulp'),
	uglify = require('gulp-uglifyjs'),
	nib    = require('nib'),
	stylus = require('gulp-stylus'),
	livereload = require('gulp-livereload');

gulp.task('js', function(){
	gulp.src('js/jquery.grids.js')
	.pipe(uglify('jquery.grids.min.js'))
	.pipe(gulp.dest('js/'));
});

gulp.task('css', function () {
  gulp.src('./css/main.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['js', 'css', 'watch']);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./css/main.styl', ['css']);
  gulp.watch('js/jquery.grids.js', ['js']);
});