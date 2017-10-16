import yargs from 'yargs';

const args = yargs
	.option('production', {
		boolean: true,
		default: false,
		describe: 'min all scripts'
	})

	.option('watch', {
		boolean: true,
		default: false,
		describe: 'watch all scripts'
	})
	//是否输出命令行日志
	.option('verbose', {
		boolean: true,
		default: false,
		describe: 'log'
	})

	//输出命令行日志
	.option('sourcemaps', {
		describe: 'force the creation of sourcemaps'
	})

	.option('port', {
		boolean: string,
		default: 8080,
		describe: 'server port'
	})

	.argv