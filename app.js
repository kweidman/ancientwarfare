var awApp = angular.module('awApp', ['ngRoute']);

awApp.config(function($routeProvider){
   		$routeProvider

   			.when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            

            .when('/video', {
                templateUrl : 'pages/video.html',
                controller  : 'bioController'
            })
            
        
            .when('/bio', {
                templateUrl : 'pages/bio.html',
                controller  : 'bioController'
            })
            
            .otherwise( {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            });
        
    });



awApp.controller('mainController', function($scope) {
    $scope.message="test";
});

awApp.controller('videoController', function($scope) {
    $scope.message="sound test";
});

awApp.controller('bioController', function($scope) {
    $scope.message="bio test";
});
