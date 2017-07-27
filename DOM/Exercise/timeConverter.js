function attachEventsListeners() {
let daysBtn=document.getElementById("daysBtn");
daysBtn.addEventListener('click',convertFromDays);
    let hoursBtn=document.getElementById("hoursBtn");
    hoursBtn.addEventListener('click',convertFromHours);
    let minutesBtn=document.getElementById("minutesBtn");
    minutesBtn.addEventListener('click',convertFromMinutes);
    let secondsBtn=document.getElementById("secondsBtn");
    secondsBtn.addEventListener('click',convertFromSeconds);

function convertFromDays() {
    let getValue=Number(document.getElementById('days').value);
    document.getElementById('hours').value=getValue*24;
    document.getElementById('minutes').value=getValue*1440;
    document.getElementById('seconds').value=getValue*86400;
}
    function convertFromHours() {
        let getValue=Number(document.getElementById('hours').value);
        document.getElementById('days').value=getValue/24;
        document.getElementById('minutes').value=getValue*60;
        document.getElementById('seconds').value=getValue*3600;
    }
    function convertFromMinutes() {
        let getValue=Number(document.getElementById('minutes').value);
        document.getElementById('days').value=getValue/1440;
        document.getElementById('hours').value=getValue/60;
        document.getElementById('seconds').value=getValue*60;
    }
    function convertFromSeconds() {
        let getValue=Number(document.getElementById('seconds').value);
        document.getElementById('days').value=getValue/86400;
        document.getElementById('hours').value=getValue/3600;
        document.getElementById('minutes').value=getValue/60;
    }

}
