function timer() {
    let tick=0;
    let clockOn=false;
    let timeInterval=null;

    function step() {
        tick++;
        let seconds=('0' + tick%60).slice(-2);
        $('#seconds').text(seconds);
        let minutes=('0' + Math.floor(tick/60)).slice(-2);
        if(minutes>=60){
            minutes-=60;
            minutes=('0'+ minutes).slice(-2);
        }
        $('#minutes').text(minutes);
        let hours=('0' + Math.floor(tick/ 60/60)).slice(-2);
        $('#hours').text(hours);
    }
    let startBtn=$('#start-timer');
    let pauseBtn=$('#stop-timer');

    startBtn.on('click',startClock);
    pauseBtn.on('click',stopClock);
    function startClock() {
        if(!clockOn){
        timeInterval=setInterval(step,1000);
        }
        clockOn=true;
    }
    function stopClock() {

            clearInterval(timeInterval);
            clockOn=false;

    }


}
