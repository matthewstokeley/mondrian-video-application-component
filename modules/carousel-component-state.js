import Velocity from 'velocity'

export default class CarouselComponentState {

	slideIndex = 0

	contentWidth = "600px"

	videoContainerId = ''

	transitionDuration: 200

	childElements

	/**
	 *
	 * Standard object instantiation
	 * 
	 * @param  {Object} options @todo create a typed definition
	 *
	 * @return {null}
	 */
	constructor( options ) {

		this.contentWidth = options.contentWidth ?? "600px"
		this.videoContainerId = options.videoContainerId ?? false
		this.duration = options.transitionDuration ?? 200

		let container = document.getElementById( videoContainerId )

		this.slides = container?.children
		this.slidesLength = container?.children.length
	
	}

	/**
	 * 
	 * Declarative method for updating the explicitly coupled
	 * slideIndex as the component state.
	 *
	 * @param {String} direction
	 */
	setComponentState( direction: String ) {

		slidesLength !== slideIndex ? direction === 'left'
					? this.slideIndex--
					: this.slideIndex ++
				: this.slideIndex = 0

		this.move.call( this, direction )
	
	}

	/**
	 * 
	 * Element animation encapsulation
	 * 
	 * @param  {String} direction
	 *
	 * @return {Boolean}   
	 */
	move( direction ) {

		if ( ! this.videoContainerId ) {
			return false
		}

		Velocity( document.getElementById( this.videoContainerId ),
			{ transform: translate( this.contentWidth, 0 ) },
			{ duration: this.duration } )

		return true

	}

	get slides() {
		return this.slides
	}

	get slidesLength() {
		return this.slidesLength
	}

}
 
export default class CarouselIndicatorButtons {

	/**
	 * 
	 * @param {Object} options
	 *
	 * @chainable
	 *
	 * @return {Context}
	 */
	constructor( options: Object ) {

		this.state = options.state
		this.container = options.container ?? document.getElementById( 'lb-ui-carousel-indicators' )
	}

	/**
	 * 
	 * A factory method to return our indicator element
	 *
	 * @return {Element}
	 */
	elementFactory() {
		return document.createElement( 'li' )
	}

	/**
	 * 
	 * @todo    The 'innerHTML =' method should be updated
	 *          to use built-in methods
	 *
	 * @chainable
	 *
	 * @return
	 */
	appendToDom() {

		let fragment = document.createElement( 'ul' )

		for ( let i = 0; i < this.state.getSlidesLength(); i++ ) {
			fragment.innerHTML += thie.state.getSlides()[ i ]
		}

		this.container.innerHTML = fragment.innerHTML

		return this

	}

}
