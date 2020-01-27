const gulp=require('gulp')
const env=require('./config.js')
const babel=require('gulp-babel')

let g = gulp

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * Transpile Javascript
 */

g.task( 'transpile'. () => {
	g.src( env.JS_PATH )
	.pipe( babel() )
	.pipe( g.dest( env.JS_DIST ) )

} )


g.task( 'build', series( 'transpile' ) )
