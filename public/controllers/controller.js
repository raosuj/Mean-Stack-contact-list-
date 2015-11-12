var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope', '$http', function($scope, $http){
	console.log("Hello from controller");


	$http.get('/controller').success(function(response){

		console.log("Data recieves");
		$scope.contactlist = response;

	});

	$scope.addContact = function(){
		console.log($scope.contact)
	};
	
	

}]);