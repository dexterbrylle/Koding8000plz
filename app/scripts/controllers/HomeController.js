app.controller('HomeController', function($scope, $window, $http, $timeout, $modal, TheLineProjectService) {

	// $scope.init = function(){
	// 	$scope.name						= '';
	// 	$scope.code						= '';
	// 	$scope.native					= '';
	// 	$scope.phone					= '';
	// 	$scope.capital					= '';
	// 	$scope.currency 				= '';
	// 	$scope.languages 				= '';
	// 	$scope.povertyhcount_125_value 	= '';
	// 	$scope.povertyhcount_125_date 	= '';
	// 	$scope.povertyhcount_25_value 	= '';
	// 	$scope.povertyhcount_25_date 	= '';
	// 	$scope.povertyhcount_4_value 	= '';
	// 	$scope.povertyhcount_4_date  	= '';
	// 	$scope.povertygap_125_value  	= '';
	// 	$scope.povertygap_125_date 		= '';
	// 	$scope.povertygap_25_value 		= '';
	// 	$scope.povertygap_25_date 		= '';
	// 	$scope.povertygap_4_value 		= '';
	// 	$scope.povertygap_4_date 		= '';
	// };

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

	$timeout(function(){
		$scope.north_america_rate = 1;
		$scope.south_america_rate = 0.9;
		$scope.antartica_rate = 0.8;
		$scope.australia_rate = 0.7;
		$scope.africa_rate = 0.6;
		$scope.asia_rate = 0.5;
		$scope.europe_rate = 0.5;
	}, 8000);

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
		$scope.selected_continent = continent;	
		var modalInstance = $modal.open({
			templateUrl: '/partials/details.html',
			controller: 'ModalInstanceCtrl',
			size: 'lg',
			resolve: {
				selected_continent: function () {
					return continent;
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