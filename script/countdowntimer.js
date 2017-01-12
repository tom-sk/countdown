
function Countdown(min,element){

// var min = 25;

var time = min * 60;
var duration = moment.duration(time * 1000, 'milliseconds');
var interval = 1000;
var intervalSet;
var minCounter = 0;
var number = Math.max(parseInt(element.textContent));


function countDown(){
  duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
  if(duration < 0){
      clearInterval(intervalSet);
          intervalSet = null;
          this.isOn = false;
  } else {
  element.textContent = moment(duration.asMilliseconds()).format('mm:ss');
  }
}


this.isOn = false;

this.start = function(){
    if(!this.isOn){
        intervalSet = setInterval(countDown, interval);
        this.isOn = true;
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
    minCounter++;

    element.textContent = (parseInt(minCounter + number) <= 9 ? "0" + parseInt(minCounter + number) : parseInt(minCounter + number)) + ":00";
}
this.minus = function(){
    duration.subtract(1, "minutes");
    minCounter--;
    element.textContent = (parseInt(minCounter + number) <= 9 ? "0" + parseInt(minCounter + number) : parseInt(minCounter + number)) + ":00";
}
this.reset = function(){
    duration = moment.duration(time * 1000, 'milliseconds');
    duration.add(minCounter, "minutes");
    element.textContent = moment(duration.asMilliseconds()).format('mm:ss');
    this.isOn = false;
    
}

}
