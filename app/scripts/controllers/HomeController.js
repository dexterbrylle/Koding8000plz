app.controller('HomeController', function($scope, $window, $http, $timeout, $modal, TheLineProjectService) {

	$scope.init = function(){
		$scope.selected_continent 	= '';
		$scope.poverty_rate 		= '125';

		$scope.north_america_rate 	= 0.5;
		$scope.south_america_rate 	= 0.5;
		$scope.antarctica_rate 		= 0.5;
		$scope.australia_rate 		= 0.5;
		$scope.africa_rate 			= 0.5;
		$scope.asia_rate 			= 0.5;
		$scope.europe_rate 			= 0.5;

		$scope.north_america_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		$scope.south_america_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		$scope.antarctica_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		$scope.australia_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		$scope.africa_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		$scope.asia_style 			= { 'padding-top': '0px', 'padding-bottom' : '0px' };
		$scope.europe_style 		= { 'padding-top': '0px', 'padding-bottom' : '0px' };
	};

	$scope.setMap = function(){
		var response;
		if($scope.poverty_rate === '125'){
			if($scope.details_125){
				response = $scope.details_125;

				$scope.africa = response.Africa;
				$scope.antarctica = response.Antarctica;
				$scope.asia = response.Asia;
				$scope.europe = response.Europe;
				$scope.north_america = response.NorthAmerica;
				$scope.south_america = response.SouthAmerica;
				$scope.australia = response.Oceania;

				$scope.north_america_rate = $scope.north_america.averageHcount_125 / 100;
				$scope.south_america_rate = $scope.south_america.averageHcount_125 / 100;
				$scope.antarctica_rate = $scope.antarctica.averageHcount_125 / 100;
				$scope.australia_rate = $scope.australia.averageHcount_125 / 100;
				$scope.africa_rate = $scope.africa.averageHcount_125 / 100;
				$scope.asia_rate = $scope.asia.averageHcount_125 / 100;
				$scope.europe_rate = $scope.europe.averageHcount_125 / 100;
			} else {
				TheLineProjectService.project.gen_data("125").then(function(response){
					$scope.details_125 = response;
					$scope.africa = response.Africa;
					$scope.antarctica = response.Antarctica;
					$scope.asia = response.Asia;
					$scope.europe = response.Europe;
					$scope.north_america = response.NorthAmerica;
					$scope.south_america = response.SouthAmerica;
					$scope.australia = response.Oceania;

					$scope.north_america_rate = $scope.north_america.averageHcount_125 / 100;
					$scope.south_america_rate = $scope.south_america.averageHcount_125 / 100;
					$scope.antarctica_rate = $scope.antarctica.averageHcount_125 / 100;
					$scope.australia_rate = $scope.australia.averageHcount_125 / 100;
					$scope.africa_rate = $scope.africa.averageHcount_125 / 100;
					$scope.asia_rate = $scope.asia.averageHcount_125 / 100;
					$scope.europe_rate = $scope.europe.averageHcount_125 / 100;
				}, function(err){
					console.log('#4 Error encountered.' + err);
				});
			}
		} else if($scope.poverty_rate === '25'){
			if($scope.details_25){
				response = $scope.details_25;

				$scope.africa = response.Africa;
				$scope.antarctica = response.Antarctica;
				$scope.asia = response.Asia;
				$scope.europe = response.Europe;
				$scope.north_america = response.NorthAmerica;
				$scope.south_america = response.SouthAmerica;
				$scope.australia = response.Oceania;

				$scope.north_america_rate = $scope.north_america.averageHcount_25 / 100;
				$scope.south_america_rate = $scope.south_america.averageHcount_25 / 100;
				$scope.antarctica_rate = $scope.antarctica.averageHcount_25 / 100;
				$scope.australia_rate = $scope.australia.averageHcount_25 / 100;
				$scope.africa_rate = $scope.africa.averageHcount_25 / 100;
				$scope.asia_rate = $scope.asia.averageHcount_25 / 100;
				$scope.europe_rate = $scope.europe.averageHcount_25 / 100;
			} else {
				TheLineProjectService.project.gen_data("25").then(function(response){
					$scope.details_25 = response;
					$scope.africa = response.Africa;
					$scope.antarctica = response.Antarctica;
					$scope.asia = response.Asia;
					$scope.europe = response.Europe;
					$scope.north_america = response.NorthAmerica;
					$scope.south_america = response.SouthAmerica;
					$scope.australia = response.Oceania;

					$scope.north_america_rate = $scope.north_america.averageHcount_25 / 100;
					$scope.south_america_rate = $scope.south_america.averageHcount_25 / 100;
					$scope.antarctica_rate = $scope.antarctica.averageHcount_25 / 100;
					$scope.australia_rate = $scope.australia.averageHcount_25 / 100;
					$scope.africa_rate = $scope.africa.averageHcount_25 / 100;
					$scope.asia_rate = $scope.asia.averageHcount_25 / 100;
					$scope.europe_rate = $scope.europe.averageHcount_25 / 100;
				}, function(err){
					console.log('#4 Error encountered.' + err);
				});
			}
		} else if($scope.poverty_rate === '4'){
			if($scope.details_4){
				response = $scope.details_4;

				$scope.africa = response.Africa;
				$scope.antarctica = response.Antarctica;
				$scope.asia = response.Asia;
				$scope.europe = response.Europe;
				$scope.north_america = response.NorthAmerica;
				$scope.south_america = response.SouthAmerica;
				$scope.australia = response.Oceania;

				$scope.north_america_rate = $scope.north_america.averageHcount_4 / 100;
				$scope.south_america_rate = $scope.south_america.averageHcount_4 / 100;
				$scope.antarctica_rate = $scope.antarctica.averageHcount_4 / 100;
				$scope.australia_rate = $scope.australia.averageHcount_4 / 100;
				$scope.africa_rate = $scope.africa.averageHcount_4 / 100;
				$scope.asia_rate = $scope.asia.averageHcount_4 / 100;
				$scope.europe_rate = $scope.europe.averageHcount_4 / 100;
			} else {
				TheLineProjectService.project.gen_data("4").then(function(response){

					$scope.details_4 = response;
					console.log($scope.details_4);
					$scope.africa = response.Africa;
					$scope.antarctica = response.Antarctica;
					$scope.asia = response.Asia;
					$scope.europe = response.Europe;
					$scope.north_america = response.NorthAmerica;
					$scope.south_america = response.SouthAmerica;
					$scope.australia = response.Oceania;

					$scope.north_america_rate = $scope.north_america.averageHcount_4 / 100;
					$scope.south_america_rate = $scope.south_america.averageHcount_4 / 100;
					$scope.antarctica_rate = $scope.antarctica.averageHcount_4 / 100;
					$scope.australia_rate = $scope.australia.averageHcount_4 / 100;
					$scope.africa_rate = $scope.africa.averageHcount_4 / 100;
					$scope.asia_rate = $scope.asia.averageHcount_4 / 100;
					$scope.europe_rate = $scope.europe.averageHcount_4 / 100;
				}, function(err){
					console.log('#4 Error encountered.' + err);
				});
			}
		}
	};

	$scope.$watch('poverty_rate', function(now, then, scope){
		if(now !== then){
			$scope.setMap();
		}
	});

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

	$scope.$watch('antarctica_rate', function(now, then, scope){
		now = 1 - now;
		var temp = 0;
		if(now > 0.5) {
			temp = (now - 0.5) * 2 * 135;
			$scope.antarctica_style = { 'transition': 'padding-bottom 1s ease', 'padding-top': '0px', 'padding-bottom' : temp + 'px' };
		} else if(now < 0.5) {
			temp = (0.5 - now) * 2 * 135;
			$scope.antarctica_style = { 'transition': 'padding-top 1s ease', 'padding-top': temp + 'px', 'padding-bottom' : '0px' };
		} else if (now === 0.5) {
			$scope.antarctica_style 	= { 'padding-top': '0px', 'padding-bottom' : '0px' };
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
		if(continent === "Antarctica")
			$scope.selected_continent = $scope.antarctica;
		if(continent === "Australia")
			$scope.selected_continent = $scope.australia;
		if(continent === "Africa")
			$scope.selected_continent = $scope.africa;
		if(continent === "Asia")
			$scope.selected_continent = $scope.asia;
		if(continent === "Europe")
			$scope.selected_continent = $scope.europe;

		$scope.selected_continent.continent = continent;
		$scope.selected_continent.poverty_rate = $scope.poverty_rate;

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

	if($scope.selected_continent.poverty_rate.toString() === '4'){
		$scope.selected_continent.averageHcount_125 = $scope.selected_continent.averageHcount_4;
		// $scope.selected_continent.topCountry_Hcount_value.name = $scope.selected_continent.topCountry_Hcount_value.name;
		// $scope.selected_continent.bottomCountry_Hcount_value.name = $scope.selected_continent.bottomCountry_Hcount_value.name;
		$scope.selected_continent.topCountry_Hcount_value.povertyhcount_125_date = $scope.selected_continent.topCountry_Hcount_value.povertyhcount_4_date;
		$scope.selected_continent.topCountry_Hcount_value.povertyhcount_125_value = $scope.selected_continent.topCountry_Hcount_value.povertyhcount_4_value;
		$scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_125_date = $scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_4_date;
		$scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_125_value = $scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_4_value;
	}

	if($scope.selected_continent.poverty_rate.toString() === '25'){
		$scope.selected_continent.averageHcount_125 = $scope.selected_continent.averageHcount_25;
		// $scope.selected_continent.topCountry_Hcount_value.name = $scope.selected_continent.topCountry_Hcount_value.name;
		// $scope.selected_continent.bottomCountry_Hcount_value.name = $scope.selected_continent.bottomCountry_Hcount_value.name;
		$scope.selected_continent.topCountry_Hcount_value.povertyhcount_125_date = $scope.selected_continent.topCountry_Hcount_value.povertyhcount_25_date;
		$scope.selected_continent.topCountry_Hcount_value.povertyhcount_125_value = $scope.selected_continent.topCountry_Hcount_value.povertyhcount_25_value;
		$scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_125_date = $scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_25_date;
		$scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_125_value = $scope.selected_continent.bottomCountry_Hcount_value.povertyhcount_25_value;
	}

	$scope.selected = { item: 'item1' };

	$scope.ok = function () {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});