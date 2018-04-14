var app = angular.module("myApp", ["ngRoute"]);
		app.config(function ($routeProvider, $locationProvider) {
			$routeProvider
				.when("/red", {
					template: "<div class='jumbotron text-center'><h2 style='color:red;'>Red Color</h2></div>"
				})
				.when("/green", {
					template: "<div class='jumbotron text-center'><h2 style='color:green;'>Green Color....</h2></div>"
				})
				.when("/blue", {
					template: "<div class='jumbotron text-center'><h2 style='color:blue;'>Blue Color...</h2></div>"
				})
				// route for the home page
				.when('/home', {
					templateUrl : 'pages/home.html',
					controller  : 'mainController'
				})

				// route for the about page
				.when('/about', {
					templateUrl : 'pages/about.html',
					controller  : 'aboutController'
				})

				// route for the contact page
				.when('/contact', {
					templateUrl : 'pages/contact.html',
					controller  : 'contactController'
				})

				// .otherwise({
				// 	// template: "<h2>Default Black Color..</h2>"
				// 	templateUrl : 'pages/home.html',
				// 	controller  : 'mainController'
				// });
				.otherwise({redirectTo: '/home'});
				
				$locationProvider.html5Mode(true);
		});
			
// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});