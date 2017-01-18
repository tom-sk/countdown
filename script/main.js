var timeDisplay = document.getElementById('time');
var startButton = document.getElementById('start-button');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var reset = document.getElementById('reset');
var breakPlus = document.getElementById('break-plus');
var breakMinus = document.getElementById('break-minus');
var setBreak = document.getElementById('set-break');
var setTimer = document.getElementById('set-timer');

var minutes = parseInt(timeDisplay.textContent);


var count = new Countdown(minutes,timeDisplay, 5);



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
    
    var number = parseInt(setTimer.textContent);
    setTimer.textContent = number + 1;
});
minus.addEventListener('click',function(){
     count.minus();

     var number = parseInt(setTimer.textContent);
     setTimer.textContent = number - 1;
});
reset.addEventListener('click',function(){
     count.reset();
});

breakPlus.addEventListener('click', function(){
    count.breakAdd();

    var number = parseInt(setBreak.textContent);
    setBreak.textContent = number + 1;
});
breakMinus.addEventListener('click', function(){
    count.breakMinus();

    var number = parseInt(setBreak.textContent);
    setBreak.textContent = number - 1;
});


