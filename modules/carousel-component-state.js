import Velocity from 'velocity'

export default class CarouselComponentState {

	slideIndex = 0

	contentWidth = "600px"

	videoContainerId = ''

	transitionDuration: 200

	childElements

	constructor( options ) {

		this.contentWidth = options.contentWidth ?? "600px"
		this.videoContainerId = options.videoContainerId ?? false
		this.duration = options.transitionDuration ?? 200

		let container = document.getElementById( videoContainerId )

		this.slides = container?.children
		this.slidesLength = container?.children.length
	
	}

	
	setComponentState( direction: String ) {

		slidesLength !== slideIndex ? direction === 'left'
					? this.slideIndex--
					: this.slideIndex ++
				: this.slideIndex = 0

		this.move.call( this, direction )
	
	}

	move( direction ) {

		if ( ! this.videoContainerId ) {
			return false
		}

		Velocity( document.getElementById( this.videoContainerId ),
			{ transform: translate( this.contentWidth, 0 ) },
			{ duration: this.duration } )

	}

	get slides() {
		return this.slides
	}

	get slidesLength {
		return this.slidesLength
	}

}
 
export default class CarouselIndicatorButtons {

	/**
	 * 
	 * @param 
	 * @return {[type]} [description]
	 */
	constructor( options: Object ) {

		this.state = options.state
		this.container = options.container ?? document.getElementById( 'lb-ui-carousel-indicators' )
	}

	elementFactory() {
		return document.createElement(
			{}
		)
	}

	appendToDom() {

		let fragment = document.createElement(
			{}
		)

		for ( let i = 0; i < this.state.getSlidesLength(); i++ ) {
			fragment.innerHTML += thie.state.getSlides()[ i ]
		}

		this.container.innerHTML = fragment.innerHTML

	}

}
