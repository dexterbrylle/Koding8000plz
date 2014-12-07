app.controller('HomeController', function($scope, $window, $http, $modal, TheLineProjectService) {

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