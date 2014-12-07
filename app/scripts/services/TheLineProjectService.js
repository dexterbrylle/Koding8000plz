app.service('TheLineProjectService', function($http, $q, $window){
	var self = this;

	self.API_URL = '/api';
	
	this.project = {
		gen_data: function(){
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: self.API_URL + '/lineproject/getPovertyHeadCount125'
			}).success(function(data, status, headers, config){
				if(data){
					console.log(data);
					deferred.resolve(data);					
				} else {
					console.log(data);
					deferred.reject(new Error('#1: Error encountered. ' + data));
				}
			}).error(function(data, status, headers, config){
				deferred.reject(new Error('#2: Error encountered.'));
			});

			return deferred.promise;
		}
	};
});