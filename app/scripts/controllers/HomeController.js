app.controller('HomeController', function($scope, $window, $http, $timeout, $modal, TheLineProjectService) {

	$scope.selected_continent = '';

	$scope.north_america_rate = 0.5;
	$scope.south_america_rate = 0.5;
	$scope.antartica_rate = 0.5;
	$scope.australia_rate = 0.5;
	$scope.africa_rate = 0.5;
	$scope.asia_rate = 0.5;
	$scope.europe_rate = 0.5;

	$scope.north_america_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	$scope.south_america_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	$scope.antartica_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	$scope.australia_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	$scope.africa_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	$scope.asia_style 			= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	$scope.europe_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };

	$scope.setMap = function(){
		TheLineProjectService.project.gen_data().then(function(response){
			if(response){
				$scope.africa = response.Africa;
				$scope.antartica = response.Antarctica;
				$scope.asia = response.Asia;
				$scope.europe = response.Europe;
				$scope.north_america = response.NorthAmerica;
				$scope.south_america = response.SouthAmerica;
				$scope.australia = response.Oceania;

				$scope.north_america_rate = $scope.north_america.averageHcount_125 / 100;
				$scope.south_america_rate = $scope.south_america.averageHcount_125 / 100;
				$scope.antartica_rate = $scope.antartica.averageHcount_125 / 100;
				$scope.australia_rate = $scope.australia.averageHcount_125 / 100;
				$scope.africa_rate = $scope.africa.averageHcount_125 / 100;
				$scope.asia_rate = $scope.asia.averageHcount_125 / 100;
				$scope.europe_rate = $scope.europe.averageHcount_125 / 100;
			}
		}, function(err){
			console.log('#3 Error encountered. ' + err);
		});
	};

	$scope.$watch('north_america_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 155;
			$scope.north_america_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 155;
			$scope.north_america_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.north_america_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.$watch('south_america_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 155;
			$scope.south_america_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 155;
			$scope.south_america_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.south_america_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.$watch('antartica_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 135;
			$scope.antartica_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 135;
			$scope.antartica_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.antartica_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.$watch('australia_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 136;
			$scope.australia_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 136;
			$scope.australia_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.australia_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.$watch('africa_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 155;
			$scope.africa_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 155;
			$scope.africa_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.africa_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.$watch('asia_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 125;
			$scope.asia_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 125;
			$scope.asia_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.asia_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.$watch('europe_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 125;
			$scope.europe_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 125;
			$scope.europe_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.europe_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		}
	});

	$scope.showDetails = function(continent){
		
			if(continent === "North America")
				$scope.selected_continent = $scope.north_america;
			if(continent === "South America")
				$scope.selected_continent = $scope.south_america;
			if(continent === "Antartica")
				$scope.selected_continent = $scope.antartica;
			if(continent === "Australia")
				$scope.selected_continent = $scope.australia;
			if(continent === "Africa")
				$scope.selected_continent = $scope.africa;
			if(continent === "Asia")
				$scope.selected_continent = $scope.asia;
			if(continent === "Europe")
				$scope.selected_continent = $scope.europe;

		var modalInstance = $modal.open({
			templateUrl: '/partials/details.html',
			controller: 'ModalInstanceCtrl',
			size: 'lg',
			resolve: {
				selected_continent: function () {
					return $scope.selected_continent;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.info('Modal dismissed at: ' + new Date());
		});
	};
});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, selected_continent) {

	$scope.selected_continent = selected_continent;
	console.log('selected continent');

	$scope.selected = {
		item: 'item1'
	};

	$scope.ok = function () {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});