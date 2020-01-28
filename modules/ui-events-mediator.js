/**
 * 
 * Leibowitz Branding and Design
 * 
 * This UI Mediator is meant to 
 * listen to standard react and browser api
 * events and to provide a custom pub/sub 
 * declarative events api.
 *
 * @todo
 * 	- Robust event queuing
 * 	- Production-environment error handling
 * 	- 'Expected' pattern object payload handling
 * 	- Onlisten->addevent
 * 	- Key-based event resolving
 * 	- Robust method invocation
 * 	- Data-based and configuration api
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
	 * This event emitter will catch propagating exceptions for events
	 * that throw them.  See the link below for a continuously updated list of
	 * common errors. 
	 * 
	 * @link https://gist.githubusercontent.com/matthewstokeley/4f9719fb85f3d1d8c77e6756f84a5b00/raw/0082061c6ee1264ec0bfbe0269b545b400971873/err.md 
	 * @todo don't throw in production environments
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

		let eventToEmit

		try {

			for ( let i = 0; i < this.events.length; i++ ) {
				if ( this.events[ i ][ name ] ) {
					eventToEmit = this.events[ i ][ name ]
				}
			}

		} catch( e ) {

			console.trace( e )
			
			throw new Exception( e ) 
		
		}

		eventToEmit.call( this, payload )

		return this
	}
}

