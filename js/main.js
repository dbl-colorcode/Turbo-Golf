// JavaScript Document
var app = angular.module("TurboGolfApp", ['ui.router', 'ngAnimate', 'angulartics', 'angulartics.google.analytics']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

//    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('step_1', {
          templateUrl: '/templates/intro.html',
          url:'/1'
      })
      .state('step_2', {
          templateUrl: '/templates/demo_1.html',
          controller: 'step2Controller',
          url:'/2'
      })
      .state('step_3', {
          templateUrl: '/templates/demo_2.html',
          url:'/3'
      })	  
	  .state('step_4', {
          templateUrl: '/templates/game.html',
          url:'/4'
      })
	  .state('step_5', {
          templateUrl: '/templates/breaker_1.html',
          url:'/5'
      })
	  .state('step_6', {
          templateUrl: '/templates/game.html',
          url:'/6'
      })
	  .state('step_7', {
          templateUrl: '/templates/breaker.html',
          url:'/7'
      })
	  .state('step_8', {
          templateUrl: '/templates/game.html',
          controller: 'step8Controller',
          url:'/8'
      })
	  .state('step_9', {
          templateUrl: '/templates/breaker.html',
          controller: 'step9Controller',
          url:'/9'
      })
	  .state('step_10', {
          templateUrl: '/templates/end.html',
          controller: 'step10Controller',
          url:'/10'
      })	  
      .state('main', {
         templateUrl: '/templates/intro.html',
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
