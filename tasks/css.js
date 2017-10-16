import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';


gulp.task('pages', ()=>{
	return gulp.src('app/**/*.css')
		.pipe(gulp.dest('server/public'))
		.pipe(gulpif.watch(args.watch, livereload()))
})