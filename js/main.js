// JavaScript Document
var app = angular.module("TurboGolfApp", ['ui.router', 'ngAnimate', 'angulartics', 'angulartics.google.analytics']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

//    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('game_1', {
          templateUrl: '/templates/game_1.html',
          url:'/1'
      })
      .state('step_2', {
          templateUrl: '/templates/step_2.html',
          controller: 'step2Controller',
          url:'/2'
      })
      .state('main', {
         templateUrl: '/templates/game_1.html',
          url:'/'
      })

}]);

app.config(['$analyticsProvider', function ($analyticsProvider) {
    $analyticsProvider.firstPageview(true);
    /* Records pages that don't use $state or $route */
    $analyticsProvider.withAutoBase(true);
    /* Records full path */
}]);

app.run(['$rootScope', '$urlRouter', function ($rootScope, $urlRouter) {

    $rootScope.touch = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $rootScope.touch = true;

        if (/iPad/i.test(navigator.userAgent)) {
            $rootScope.ipad = true;
        }
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            $rootScope.apple = true;
        }
    }

}]);


app.controller( "mainController",
    function( $scope, $rootScope, $analytics, $state) {
		"use strict";
        console.log('hello from main controller');
		$scope.startButton = function (){
			startGame();
		}
		$scope.pauseButton = function (){
			pauseGame();
		}
    }
);


app.controller( "step2Controller",
    function( $scope, $rootScope, $analytics, $state) {
        console.log('hello from step2Controller');
        $scope.myVariable = "Hej";

    }
);
