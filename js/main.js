<<<<<<< HEAD
// JavaScript Document


$( document ).ready(function() {
	"use strict";

//Batter up/////////////////////

window.setInterval(batterUp, 1000);

var ballOne = '<div class="ball ball-one">ball 1</div>';	
var ballTwo = '<div class="ball ball-two">ball 2</div>';


var curveOne = {
    start: {
      x: 525,
      y: 200,
      angle: 120,
	  length: 1.1
    },
    end: {
      x:200,
      y:650,
      angle: 0,
      length: 0
    }
  };
  var curveTwo = {
    start: {
      x: 525,
      y: 200,
      angle: 100,
	  length: 1
    },
    end: {
      x:100,
      y:650,
      angle: 0,
      length: 0
    }
  };

function batterUp(){
	var ballArray = [ballOne, ballTwo];
	var	ballToUse = ballArray[Math.floor(Math.random() * ballArray.length)];
	$(".field").append(ballToUse);
	if ( $(".ball").hasClass("ball-one")) {
        $(".ball.ball-one").animate({
            path : new $.path.bezier(curveOne)
        }, 5000);
		$(".ball").removeClass("ball-one");
    } else if ( $(".ball").hasClass("ball-two")) {
        $(".ball.ball-two").animate({
            path : new $.path.bezier(curveTwo)
        }, 5000);
		$(".ball").removeClass("ball-two");
    }
}	

//Collision detect/////
var scoreBlue = 0;
$("#score-blue").html(scoreBlue);


    function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }

function updateScoreBlue() {
	scoreBlue = scoreBlue + 1;
	$("#score-blue").html(scoreBlue);
}	
window.setInterval(function() {
	$(".ball").each(function() { 
	    if (collision($("#flag-blue"), $(this) ) === true){
			$(this).css("display", "none");
			updateScoreBlue();
		}
	});
}, 200);


	
	
//Prevent window scroll on arrow////////////////////
	window.addEventListener("keydown", function(event) {
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}, false);
	 
//Move flags//////////////////
$(function() {
  var direction,
  	  blueDirection,
      movingTimeout,
	  movingTimeoutBlue = -1;
  var FPS = 60;

  $(window).on('keydown', function(e) {    
    if (e.keyCode === 39) {
      direction = 'right';
	  startMoving(direction);
    } else if (e.keyCode === 37 ) {
      direction = 'left';
	  startMoving(direction);
    } else if (e.keyCode === 68 ) {
      blueDirection = 'right';
	  startMovingBlue(blueDirection);
    } else if (e.keyCode === 65 ) {
      blueDirection = 'left';
	  startMovingBlue(blueDirection);
    }     
  });

  function startMoving(e) {
    if (movingTimeout === -1) {      
      loop(e);
    }
  }
  function startMovingBlue(blueDirection) {
    if (movingTimeoutBlue === -1) {      
      loopBlue(blueDirection);
    }
  }
  
  function loopBlue( blueDirection) {
	if (parseInt($("#flag-blue").css("left")) >= 50 && parseInt($("#flag-blue").css("left")) <= 475){
		move( blueDirection === 'left' ? -5 : 5, $('#flag-blue'));
		movingTimeoutBlue = setTimeout(loopBlue, 1000/ FPS, blueDirection);
	} else if (parseInt($("#flag-blue").css("left")) < 50){
		$("#flag-blue").css("left", "+=8");
	} else if (parseInt($("#flag-blue").css("left")) > 475){
		$("#flag-blue").css("left", "-=8");
	}
  }

  function loop(e) {
	  if (parseInt($("#flag-green").css("left")) >= 575 && parseInt($("#flag-green").css("left")) <= 1000){
    move(e === 'left' ? -5 : 5, $('#flag-green'));
	movingTimeout = setTimeout(loop, 1000/ FPS, direction);
	} else if (parseInt($("#flag-green").css("left")) < 575){
		$("#flag-green").css("left", "+=8");
	} else if (parseInt($("#flag-green").css("left")) > 1000){
		$("#flag-green").css("left", "-=8");
	}

  }

  function move(offset, $target) {
    $target.css('left', (parseInt($target.css('left')) + offset) + 'px');
  }

  $(window).on('keyup', function(e) { 
	  if (e.keyCode === 39 || e.keyCode === 37) {
			clearTimeout(movingTimeout);
    		movingTimeout = -1;
	  } else if (e.keyCode === 68 || e.keyCode === 65) {
		    clearTimeout(movingTimeoutBlue);
    		movingTimeoutBlue = -1;
	  }
  });
}); //end move flags
	
});
=======
var app = angular.module("TurboGolfApp", ['ui.router', 'ngAnimate', 'angulartics', 'angulartics.google.analytics']);

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
          controller: 'step2Controller',
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
    function( $scope, $rootScope, $analytics, $state) {
        console.log('hello from main controller');


    }
);


app.controller( "step2Controller",
    function( $scope, $rootScope, $analytics, $state) {
        console.log('hello from step2Controller');
        $scope.myVariable = "Hej";

    }
);
>>>>>>> da11569fcdcc28444fdc2749355e0ff84ea787ed
