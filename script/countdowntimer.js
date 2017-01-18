
function Countdown(min, element, breakMin){
"use strict";
// var min = 25;

var time = min * 60;
var breakTime = breakMin * 60;
var duration = moment.duration(time * 1000, 'milliseconds');
var duration2 = moment.duration((time * 1000) + 2000, 'milliseconds');
var breakDuration = moment.duration((breakTime * 1000) + 2000, 'milliseconds');
var interval = 1000;

var intervalSet;
var minCounter = 0;
var number = Math.max(parseInt(element.textContent));



var isBreak = false;



function countDown(){
    
  duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');

  if(duration < 0){
      if( isBreak){
          element.textContent = "Break Time!";
          duration = moment.duration(breakDuration.asMilliseconds() - interval, 'milliseconds');;
    //   clearInterval(intervalSet);
    //       intervalSet = null;
    //       this.isOn = false;
           isBreak = false;
          
        } else if(!isBreak){
          element.textContent = "over";
         
          duration = moment.duration(duration2.asMilliseconds() - interval, 'milliseconds');
          isBreak = true;
        }
      
  } else {
        element.textContent = moment(duration.asMilliseconds()).format('mm:ss');
  }
}


this.isOn = false;


this.start = function(){
    if(!this.isOn){
        intervalSet = setInterval(countDown, interval);
        this.isOn = true;
        isBreak = true;
    }
}
this.stop = function(){
     if(this.isOn){
          clearInterval(intervalSet);
          intervalSet = null;
          this.isOn = false;
      }
}
this.add = function(){
    duration.add(1, "minutes");
    duration2.add(1, "minutes");
    minCounter++;
    
    element.textContent = (parseInt(minCounter + number) <= 9 ? "0" + parseInt(minCounter + number) : parseInt(minCounter + number)) + ":00";
}
this.minus = function(){
    duration.subtract(1, "minutes");
    duration2.subtract(1, "minutes");
    minCounter--;
    element.textContent = (parseInt(minCounter + number) <= 9 ? "0" + parseInt(minCounter + number) : parseInt(minCounter + number)) + ":00";
}
this.reset = function(){
    duration = moment.duration(time * 1000, 'milliseconds');
    duration.add(minCounter, "minutes");
    element.textContent = moment(duration.asMilliseconds()).format('mm:ss');
    this.isOn = false;
    
}


// this.breakStart = function(){
//     if(!this.isOn){
//         intervalSet = setInterval(countDown, interval);
//         this.isOn = true;
//     }

this.breakAdd = function(){
    breakDuration.add(1, "minutes");
}
this.breakMinus = function(){
    breakDuration.subtract(1, "minutes");

}




}

}

