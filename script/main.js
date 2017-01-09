
$(function(){

    var valueElement = $('#time');
  
    function incrementValue(e){
      var number = Math.max(parseInt(valueElement.text()) + e.data.increment,0);
      
        timeDisplay.textContent = (number <= 9 ? "0" + number : number) + ":00";
      
        return false;
    }

    $('#plus').on('click', {increment: 1}, incrementValue);

    $('#minus').on('click', {increment: -1}, incrementValue);

});






var timeDisplay = document.getElementById('time');
var startButton = document.getElementById('start-button');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var reset = document.getElementById('reset');

var minutes = parseInt(timeDisplay.textContent);


var count = new Countdown(minutes,timeDisplay);



startButton.addEventListener('click',function(){
     if(count.isOn){
       count.stop();
    } else{
        count.start();
    }

    if(startButton.textContent == "Start"){
        startButton.textContent = "Stop";
    } else if (startButton.textContent == "Stop"){
        startButton.textContent = "Start";
    }
});

plus.addEventListener('click',function(){
     count.add();
     
});
minus.addEventListener('click',function(){
     count.minus();
});
reset.addEventListener('click',function(){
     count.reset();
});


