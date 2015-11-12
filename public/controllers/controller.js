var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope', '$http', function($scope, $http){
	console.log("Hello from controller");

	var refresh = function(){
		$http.get('/controller').success(function(response){

		console.log("Data recieves");
		$scope.contactlist = response;
		$scope.contact="";

	});

	};
	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/controller', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};
	
	$scope.remove =function(id){
		console.log(id);
		$http.delete('/controller/' + id).success(function(response){
			console.log(response);
			refresh();
		});

	};
	

}]);