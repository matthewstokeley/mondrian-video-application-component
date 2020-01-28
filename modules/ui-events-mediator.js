/**
 * 
 * Leibowitz Branding and Design
 * 
 * This UI Mediator is meant to 
 * listen to standard react and browser api
 * events and to provide a custom pub/sub 
 * declarative events api.
 *
 * @todo Robust version required
 *
 * @version 2.0.0
 */
export default class UIMediator {

	events = []

	listeners = []

	/**
	 * 
	 *
	 * @chainable
	 * 
	 * @param {Function} fn
	 *
	 * @return {Context}
	 */
	listen( fn: Function ) {
		fn.call( this )

		return this

	}

	/**
	 * 
	 *
	 * @chainable
	 * 
	 * @param {String}     name
	 * 
	 * @param {Function}   fn
	 *
	 * @return {Context}
	 */
	addEvent( name: String, fn: Function ) {

		let eventObj = {}

		eventObj[ name ] = fn

		this.events.push( eventObj )

		return this
	}

	/**
	 *
	 * 
	 * @chainable
	 * 
	 * @param {String}    name
	 * 
	 * @param {Object}    payload
	 *
	 * @return {Context}
	 */
	emit( name: String, payload: Object ) {
		for ( let i = 0; i < this.events.length; i++ ) {
			if ( this.events[ i ][ name ] ) {
				this.events.[ i ][ name ].call( this, payload )
			}
		}

		return this
	}
}

