const gulp=require('gulp')
const env=require('./config.js')
const babel=require('gulp-babel')


let g = gulp

g.task( 'transpile'. () => {
	g.src( env.JS_PATH )
	.pipe( babel( {
		presets: [ '#@babel/preset-env' ]
	} ) )
	.pipe( g.dest( env.JS_DIST ) )

} )

task( 'build', series( 'transpile' ) )
