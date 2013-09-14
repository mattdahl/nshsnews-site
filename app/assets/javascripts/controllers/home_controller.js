/**
 * The controller for the home page
 */
NN.Index.Controllers.controller('HomeController', ['$scope', function ($scope) {
	// Sets up the slider
	var options = {
	    autoPlay: false,
	    autoPlayDelay: 4000,
	    pauseOnHover: false,
	    hidePreloaderDelay: 500,
	    nextButton: true,
	    prevButton: true,
	    pauseButton: false,
	    preloader: true,
	    hidePreloaderUsingCSS: false,
	    animateStartingFrameIn: true,
	    navigationSkipThreshold: 750,
	    preventDelayWhenReversingAnimations: true,
	    customKeyEvents: null
	};

	$("#sequence").sequence(options).data("sequence");
}]);