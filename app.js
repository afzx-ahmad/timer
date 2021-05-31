// programing language: javascript
// author: afzx.ahmad

const dateTargetSource ='2 April 2021, 02:55:00';
// get time target with milisecond
const dateTarget = new Date(dateTargetSource).getTime();

document.getElementsByClassName('date_target')[0].innerText = dateTargetSource;


function timer(){
    // get user's time now with milisecond
    const dateNow = new Date().getTime();
    // get gap time with milisecond
    const dateGap = dateTarget - dateNow;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const countDay = Math.floor(dateGap / day);
    const countHour = Math.floor((dateGap % day) / hour);
    const countMinute = Math.floor((dateGap % hour) / minute);
    const countSecond = Math.floor((dateGap % minute) / second);
    
    document.querySelector(".day > h2").innerText = countDay;
    document.querySelector(".hour > h2").innerText = countHour;
    document.querySelector(".minute > h2").innerText = countMinute;
    document.querySelector(".second > h2").innerText = countSecond;
    
    if(dateGap <= 0)
    {
        document.querySelector(".timer_container > h1").innerText = 'We Have Been Open Now :)';
        document.getElementsByClassName('timer')[0].classList.add("hide");
        // document.getElementById('#idname')[0].classList.add("hide");
        // document.queryselector('.countdown)[0].classList.add("hide");
        clearInterval(looping);
    }
}

const looping = setInterval(timer, 1000);
