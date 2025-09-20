let Days = document.getElementById("days")
let Hours = document.getElementById("hours")
let Minutes = document.getElementById("minutes")
let Seconds = document.getElementById("seconds")
// console.log(days);

//set a time that time i want to end
//Date capital and also space
let targetdate = new Date("febuary 17 2026 00:00:00").getTime();
//console.log(targetdate);
 function timer () {
    let currentDate = new Date().getTime();
    let distance = targetdate - currentDate;
    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60)%24;
    const minutes = Math.floor(distance / 1000 / 60 )%60;
    const seconds = Math.floor(distance / 1000)%60;
 //console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
    //target date se current date se minus karke calculation kardi
    // inner html mai ab calculated day dal detain hai
    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
 }
setInterval(timer, 1000)