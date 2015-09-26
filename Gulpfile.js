var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');

gulp.task('styles', function() {
	gulp.src('sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
	gulp.src('js/src/**/*.js')
		.pipe(babel({modules: 'system'}))
		.pipe(gulp.dest('./js/dist/'))
})

gulp.task('default', function() {
	gulp.watch('./sass/**/*.sass', ['styles']);
	gulp.watch('./js/src/**/*.js', ['js']);
});
