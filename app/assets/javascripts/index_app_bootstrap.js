var NN = NN || {};

NN.Index = angular.module('index_app', ['index_app.controllers']);
NN.Index.Controllers = angular.module('index_app.controllers', []);

/**
 * Provides configuration for the index module, namely setting up route forwarding using $routeProvider for a single-page app experience
 */
NN.Index.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/home',
		{
			templateUrl: 'views/partials/home.html',
			controller: 'HomeController'
		})
		.when('/about',
		{
			templateUrl: 'views/partials/about.html',
			controller: null
		})
		.when('/contact',
		{
			templateUrl: 'views/partials/contact.html',
			controller: null
		})
		.otherwise({redirectTo: '/home'});
}]);