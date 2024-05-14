
// console.log(date);
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTimezoneOffset());
// console.log(date.getTime());
// console.log(date.getUTCHours());
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

const formatNum = num => num < 10 ? `0${num}` : num;

const timer = setInterval(() => {
    let date = new Date();
    let alisher = new Date(2024, 4, 14);
    let dif = alisher - date;


    
    if (dif <= 0) {
        clearInterval(timer);
        document.getElementById('happy').textContent = "Happy Birthday!";
    } else {
        let daysValue = Math.floor(dif / (1000 * 60 * 60 * 24));
        let hoursValue = Math.floor((dif / (1000 * 60 * 60)) % 24);
        let minutesValue = Math.floor((dif / (1000 * 60)) % 60);
        let secondsValue = Math.floor((dif / 1000) % 60);

        days.textContent = formatNum(daysValue);
        hours.textContent = formatNum(hoursValue);
        minutes.textContent = formatNum(minutesValue);
        seconds.textContent = formatNum(secondsValue);
    }
}, 1000);
