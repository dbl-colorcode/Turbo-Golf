// JavaScript Document

function startGame() {
	"use strict";
	counter = window.setInterval(timer, 1000);
	batterUpInterval = window.setInterval(batterUp, 1000);
	$(".controls.play").remove();
	console.log("lets get going");
}

function pauseGame(){
	clearInterval(counter);
	clearInterval(batterUpInterval);
}


//Batter up/////////////////////
var batterUpInterval;

var ballElement = '<img src="img/ball.png">';
//blue
var ballOne = '<div class="ball curve-one bounce-one">'+ballElement+'</div>';	
var ballTwo = '<div class="ball curve-two bounce-two">'+ballElement+'</div>';
var ballThree = '<div class="ball curve-three bounce-three">'+ballElement+'</div>';
var ballFour = '<div class="ball curve-four bounce-four">'+ballElement+'</div>';
//green
var ballFive = '<div class="ball curve-five bounce-five">'+ballElement+'</div>';
var ballSix =  '<div class="ball curve-six bounce-six">'+ballElement+'</div>';
var ballSeven = '<div class="ball curve-seven bounce-seven">'+ballElement+'</div>';
var ballEight = '<div class="ball curve-eight bounce-eight">'+ballElement+'</div>';
//blue
var curveOne = {
    start: {x: 500,y: 175,angle: 90,length: 1},
    end: {x:50,y:520,angle: 0,length: 0}
  };
var bounceOne = {
    start: {x:50,y:520,angle: 140,length: 0.60},
    end: {x:0,y:1200,angle: 0,length: 0}
  }; 
var curveTwo = {
    start: {x: 500,y: 175,angle: 100,length: 1.1},
    end: {x:150,y:520,angle: 0,length: 0}
  };
var bounceTwo = {
    start: {x:150,y:520,angle: 140,length: 0.60},
    end: {x:50,y:1200,angle: 0,length: 0}
   };
var curveThree = {
    start: {x: 500,y: 175,angle: 120,length: 1.25},
    end: {x:250,y:520,angle: 0,length: 0}
  };
var bounceThree = {
    start: {x:250,y:520,angle: 160,length: 0.75},
    end: {x:150,y:1200,angle: 0,length: 0}
  };    
var curveFour = {
    start: {x: 500,y: 175,angle: 150,length: 1.5},
    end: {x:350,y:520,angle: 0,length: 0}
  };
var bounceFour = {
    start: {x:350,y:520,angle: 160,length: 0.50},
    end: {x:300,y:1200,angle: 0,length: 0}
  }; 
//green
var curveFive = {
    start: {x: 500,y: 175,angle: -150,length: 1.5},
    end: {x:650,y:520,angle: 0,length: 0}
  };
var bounceFive = {
    start: {x:650,y:520,angle: -160,length: 0.50},
    end: {x:700,y:1200,angle: 0,length: 0}
  };  
var curveSix = {
    start: {x: 500,y: 175,angle: -120,length: 1.25},
    end: {x:750,y:520,angle: 0,length: 0}
  };
var bounceSix = {
    start: {x:750,y:520,angle: -160,length: 0.75},
    end: {x:850,y:1200,angle: 0,length: 0}
   };
var curveSeven = {
    start: {x: 500,y: 175,angle: -100,length: 1.1},
    end: {x:850,y:520,angle: 0,length: 0}
  };
var bounceSeven = {
    start: {x:850,y:520,angle: -140,length: 0.60},
    end: {x:950,y:1200,angle: 0,length: 0}
  };
var curveEight = {
   start: {x: 500,y: 175,angle: -90,length: 1},
    end: {x:950,y:520,angle: 0,length: 0}
  };
var bounceEight = {
    start: {x:950,y:520,angle: -140,length: 0.60},
    end: {x:1000,y:1200,angle: 0,length: 0}
  };   
 
 function swingSound(){
	document.getElementById("golf-shot").volume = 0.2;
	document.getElementById('golf-shot').play();  
 }

function batterUp(){
	var ballArray = [ballOne, ballTwo, ballThree, ballFour, ballFive, ballSix, ballSeven, ballEight];
	var	ballToUse = ballArray[Math.floor(Math.random() * ballArray.length)];
	$(".field").append(ballToUse);
	setTimeout(swingSound, 1000);
	$(".ball img").animate({
		width: "25px"
	}, 5000, "easeInExpo");
	if ( $(".ball").hasClass("curve-one")) {
        $(".ball.curve-one").animate({
            path : new $.path.bezier(curveOne),
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-one");
    } else if ( $(".ball").hasClass("curve-two")) {
        $(".ball.curve-two").animate({
            path : new $.path.bezier(curveTwo)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-two");
    } else if ( $(".ball").hasClass("curve-three")) {
        $(".ball.curve-three").animate({
            path : new $.path.bezier(curveThree)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-three");
    } else if ( $(".ball").hasClass("curve-four")) {
        $(".ball.curve-four").animate({
            path : new $.path.bezier(curveFour)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-four");
    } else if ( $(".ball").hasClass("curve-five")) {
        $(".ball.curve-five").animate({
            path : new $.path.bezier(curveFive)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-five");
    } else if ( $(".ball").hasClass("curve-six")) {
        $(".ball.curve-six").animate({
            path : new $.path.bezier(curveSix)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-six");
    } else if ( $(".ball").hasClass("curve-seven")) {
        $(".ball.curve-seven").animate({
            path : new $.path.bezier(curveSeven)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-seven");
    } else if ( $(".ball").hasClass("curve-eight")) {
        $(".ball.curve-eight").animate({
            path : new $.path.bezier(curveEight)
        }, 5000, "easeInExpo");
		$(".ball").removeClass("curve-eight");
    }
}

//Collision detect/////
var scoreBlue = 0;
var scoreGreen = 0;
$("#score-blue").html(scoreBlue);
$("#score-green").html(scoreBlue);

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

window.setInterval(function() {
	$(".ball").each(function() { 
	    if (collision($("#flag-blue"), $(this) ) === true){
			$(this).css("display", "none");
			updateScoreBlue();
			$(this).remove();
		}
	});
	$(".ball").each(function() { 
	    if (collision($("#flag-green"), $(this) ) === true){
			$(this).css("display", "none");
			updateScoreGreen();
			$(this).remove();
		}
	});	
	$(".ball").each(function() { 
	    if (collision($(".holes"), $(this) ) === true){
			if ($(this).hasClass("bounce-one")){
				$(this).animate({
					path : new $.path.bezier(bounceOne)
				}, 1000, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-two")){
				$(this).animate({
					path : new $.path.bezier(bounceTwo)
				}, 1100, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-three")){
				$(this).animate({
					path : new $.path.bezier(bounceThree)
				}, 1200, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-four")){
				$(this).animate({
					path : new $.path.bezier(bounceFour)
				}, 1300, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-five")){
				$(this).animate({
					path : new $.path.bezier(bounceFive)
				}, 1300, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-six")){
				$(this).animate({
					path : new $.path.bezier(bounceSix)
				}, 1200, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-seven")){
				$(this).animate({
					path : new $.path.bezier(bounceSeven)
				}, 1100, "linear", function(){
					$(this).remove();
				});
			} else if ($(this).hasClass("bounce-eight")){
				$(this).animate({
					path : new $.path.bezier(bounceEight)
				}, 1000, "linear", function(){
					$(this).remove();
				});
			}
		}
	});
}, 200);

function updateScoreBlue() {
	scoreBlue = scoreBlue + 1;
	$("#score-blue").html(scoreBlue);
	document.getElementById('hole-in-one').play();
	checkForWin();
}
function updateScoreGreen() {
	scoreGreen = scoreGreen + 1;
	$("#score-green").html(scoreGreen);
	document.getElementById('hole-in-one').play();
	checkForWin();
}			

var timeCompleted;

function checkForWin(){
		if ((scoreBlue+scoreGreen)>= 1){
			//window.location.replace("/#/1");//set variable clock & clear game - overvej bare at vise det på samme frame.
			timeCompleted = count;
			alert ("hurra for en smartspiller" + timeCompleted);
			count = 120;
			clearInterval(counter);
			clearInterval(batterUpInterval);
		}
}


//Timer///////////////
var count = 120;
var counter;

function timer() {
    count = count - 1;
    if (count === -1) {
        clearInterval(counter);
		alert ("game over");
        return;
		
    }
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    minutes %= 60;
    console.log (minutes + "m " + seconds + "s");
	var minutesString = minutes.toString();
	var secondsString = seconds.toString();
	$("#counter-1").text("0");
	$("#counter-2").html(minutesString);
	if (seconds > 9){
		$("#counter-3").html(secondsString.substr(0, 1));
	} else {
		$("#counter-3").html("0");
	}		
	$("#counter-4").html(secondsString.slice(-1));		
}


$( document ).ready(function() {
	"use strict";		

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
	if (parseInt($("#flag-blue").css("left")) >= 25 && parseInt($("#flag-blue").css("left")) <= 475){
		move( blueDirection === 'left' ? -5 : 5, $('#flag-blue'));
		movingTimeoutBlue = setTimeout(loopBlue, 1000/ FPS, blueDirection);
	} else if (parseInt($("#flag-blue").css("left")) < 25){
		$("#flag-blue").css("left", "+=8");
	} else if (parseInt($("#flag-blue").css("left")) > 475){
		$("#flag-blue").css("left", "-=8");
	}
  }

  function loop(e) {
	  if (parseInt($("#flag-green").css("left")) >= 524 && parseInt($("#flag-green").css("left")) <=974){
    move(e === 'left' ? -5 : 5, $('#flag-green'));
	movingTimeout = setTimeout(loop, 1000/ FPS, direction);
	} else if (parseInt($("#flag-green").css("left")) < 524){
		$("#flag-green").css("left", "+=8");
	} else if (parseInt($("#flag-green").css("left")) > 974){
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