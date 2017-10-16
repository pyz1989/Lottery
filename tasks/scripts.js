import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concot';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';


gulp.task('scripts', ()=>{
	return gulp.src(['app/js/index.js'])
		.pipe(plumber({
			errorHandle: function() {

			}
		}))
		.pipe(named())
		.pipe(gulpWebpack({
			module: {
				loaders：[{
						test: /\.js$/,
						loader: 'babel'
				}]
			}
		}), null, (err, status)=>{
				log(`Finished '${colors.cyan'sctipts'}'`, status.toString({
					chunks: false
				}));
		})
		.pipe(gulp.dest('server/public/js'))
		.pipe(rename({
			basename: 'cp',
			extname: '.min.js'
		}))
		.pine(uglify({
			compress: { properties: false},
			output: {'quote_keys': true}
		}))
		.pipe(gulp.dest('server/public/js'))
		.pipe(gulpif.watch(args.watch, livereload()))
})