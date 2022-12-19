const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
const NewYear="1 Jan 2023";
function countdown() {
    const newYearDate= new Date(NewYear);
    // build in "new date" function
    const currentDate= new Date();
    const totalSeconds=Math.floor(newYearDate-currentDate)/1000;
    const d=Math.floor(totalSeconds/3600/24);
    const h=Math.floor(totalSeconds/3600)%24;
    const m=Math.floor(totalSeconds/60)%60;
    const s=Math.floor(totalSeconds)%60;
    console.log(d,h,m,s);
    //changing format adding "zero" infront
    daysEl.innerHTML=formatTime(d);
    hoursEl.innerHTML=formatTime(h);
    minsEl.innerHTML=formatTime(m);
   secondsEl.innerHTML=formatTime(s);
};

function formatTime(time) {
  return time<10 ? (`0${time}`):time;
}
// initial call
countdown();
// convert mili sec to seconds
setInterval(countdown,1000);