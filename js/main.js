// JavaScript Document


$( document ).ready(function() {
	"use strict";

//Batter up

window.setInterval(batterUp, 5000);

var ballOne = '<div class="ball ball-one">ball 1</div>';	
var ballTwo = '<div class="ball ball-two">ball 2</div>';

function batterUp(){
	var ballArray = [ballOne, ballTwo];
	var	ballToUse = ballArray[Math.floor(Math.random() * ballArray.length)];
	$(".field").append(ballToUse);
}
	
//Prevent window scroll on arrow;
	window.addEventListener("keydown", function(event) {
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}, false);
	 
//Move flags	
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
    move( blueDirection === 'left' ? -5 : 5, $('#flag-blue'));
	movingTimeoutBlue = setTimeout(loopBlue, 1000/ FPS, blueDirection);
  }

  function loop(e) {
    move(e === 'left' ? -5 : 5, $('#flag-green'));
	movingTimeout = setTimeout(loop, 1000/ FPS, direction);
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