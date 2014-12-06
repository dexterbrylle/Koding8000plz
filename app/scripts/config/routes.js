app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/', {
			controller: 'HomeController',
			templateUrl: '/partials/home.html'
		});
	}
]);