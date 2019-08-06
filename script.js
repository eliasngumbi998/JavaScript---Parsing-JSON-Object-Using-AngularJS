var app = angular.module('myModule', [])
					.controller('myController', function($scope, $http){
 
 
						$scope.getData = function(){
							$http.get('user.json').then(function(response){
								$scope.users = response.data;
							});
						}
					});
