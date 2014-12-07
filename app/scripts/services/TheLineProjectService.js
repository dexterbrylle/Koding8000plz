app.service('TheLineProjectService', function($http, $q, $window){
	var self = this;

	self.API_URL = 'http://udkk7d0fd2d1.dexterbryllematos.koding.io:3000/api';
	
	this.project = {
		gen_data: function(rate){
			var deferred = $q.defer();
			var address = '/lineproject/getPovertyHeadCount125';

			if(rate === '125')
				address = '/lineproject/getPovertyHeadCount125';
			else if (rate === '4')
				address = '/lineproject/getPovertyHeadCount4';
			else if (rate === '25')
				address = '/lineproject/getPovertyHeadCount25';

			$http({
				method: 'GET',
				url: self.API_URL + address
			}).success(function(data, status, headers, config){
				if(data){
					console.log(data);
					deferred.resolve(data);					
				} else {
					deferred.reject(new Error('#1: Error encountered. ' + data));
				}
			}).error(function(data, status, headers, config){
				deferred.reject(new Error('#2: Error encountered.' + data));
			});

			return deferred.promise;
		}
	};
});