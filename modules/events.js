/**
 *
 * This UI Mediator is meant to 
 * listen to standard react and browser api
 * events and to provide a custom pub/sub 
 * declarative events api.
 */
export default class UIMediator {

	events = []

	listeners = []

	listen( fn: Function ) {
		fn.call( this )
	}

	addEvent( name: String, fn: Function ) {

		let eventObj = {}

		eventObj[ name ] = fn

		this.events.push( eventObj )

	}

	emit( name: String, payload: Object ) {
		for ( let i = 0; i < this.events.length; i++ ) {
			if ( this.events[ i ][ name ] ) {
				this.events.[ i ][ name ].call( this, payload )
			}
		}
	}
}

