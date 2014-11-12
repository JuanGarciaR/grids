var gulp		= require('gulp'),
	uglify		= require('gulp-uglifyjs'),
	nib			= require('nib'),
	stylus		= require('gulp-stylus'),
	livereload	= require('gulp-livereload'),
	coffee		= require('gulp-coffee');

gulp.task('coffee', function(){
	gulp.src('./js/jquery.grids.coffee')
	.pipe(coffee({bare: true}))
	.pipe(gulp.dest('./js/'));
});

gulp.task('js', function(){
	gulp.src('./js/jquery.grids.js')
	.pipe(uglify('jquery.grids.min.js'))
	.pipe(gulp.dest('./js/'));
});

gulp.task('css', function () {
  gulp.src('./css/main.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./css/main.styl', ['css']);
  gulp.watch('./js/jquery.grids.coffee', ['coffee']);
  gulp.watch('./js/jquery.grids.js', ['js']);
});


gulp.task('default', ['coffee','js', 'css', 'watch']);