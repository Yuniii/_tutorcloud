var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');

gulp.task('styles', function() {
	gulp.src('sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
	gulp.src('public/js/src/**/*.js')
		.pipe(babel({modules: 'system'}))
		.pipe(gulp.dest('./public/js/dist/'))
})

gulp.task('default', function() {
	gulp.watch('./sass/**/*.sass', ['styles']);
	gulp.watch('./public/js/src/**/*.js', ['js']);
});
