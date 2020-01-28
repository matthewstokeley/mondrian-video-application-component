/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * CONSTANT DEFINITIONS
 */

const gulp=require('gulp')
const env=require('./config.js')
const concat=require('gulp-concat')
const babel=require('gulp-babel')

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * Leibowitz Branding and Design
 * Task Runner
 *
 * @version 0.0.1
 */

let runner = gulp

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * TRANSPILE
 */

runner.task( 'transpile', () => {
	return runner.src( './modules/**/*.js' )
	.pipe( babel({
  "presets": [
  		"@babel/preset-env",
  		"@babel/preset-react",
        "@babel/preset-typescript"
  ],
  "plugins": [
  	["babel-plugin-styled-components", {
  		"minify": false,
  		"transpileTemplateLiterals": false,
  		"pure": true
  		}
  	], "@babel/plugin-proposal-class-properties",
  	   "@babel/plugin-transform-runtime"
  ],
  "ignore": []
 
}
) )
	.pipe( runner.dest( './dist' ) )

} )

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * CONCATENATE
 */

runner.task( 'concat', () => {

	return runner.src( './dist/**/*.js' )
		.pipe( concat( 'all.js' ) )
		.pipe( runner.dest( './dist' ) )

} )

runner.task( 'build', runner.series( 'transpile', 'concat' ) )
