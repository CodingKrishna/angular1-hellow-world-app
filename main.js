var helloApp = angular.module("helloApp", []);
	helloApp.controller("HelloCtrl", function($scope) {
		$scope.appTitle = "Hello World application";
		$scope.userName = "HariKrishna";
		$scope.mobileNo = 8123870076;
		$scope.email = "codingkrishna@gmail.com";
});
