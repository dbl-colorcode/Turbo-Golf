var app = angular.module("TurboGolfApp", ['ui.router', 'ngAnimate', 'angulartics', 'angulartics.google.analytics', 'ngCookies']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

//    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('step_1', {
          templateUrl: 'Assima-TurboGolf/templates/step_1.html',
          url:'/1'
      })
      .state('step_2', {
          templateUrl: 'Assima-TurboGolf/templates/step_2.html',
          url:'/2'
      })
      .state('main', {
         templateUrl: 'Assima-TurboGolf/templates/step_1.html',
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
    function( $scope, $rootScope, $analytics, $cookies, $state) {
        console.log('hello from main controller');

        $scope.pageClass = 'page-main';

        $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            $scope.pageClass = toState.name;
        });

        /*$scope.$watch(function () {
            return $cookies.get('cookies-accepted');
        }, function (value) {
            if(value)
                $scope.cookiesVisible = false;
        });
        //TODO call accept cookies
        $scope.acceptCookies = function () {
            $cookies.put('cookies-accepted', true);
        };
        */

        //Public functions
        $scope.nextStep = function(){
            var current_state = $state.current.name;
            console.log('$state.current.name', $state.current.name);

        }


    }
);