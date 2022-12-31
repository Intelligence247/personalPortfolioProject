// Constants
const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')



setInterval(() => {

    let date = new Date;
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    secEl.style.rotate = `${sec * 6 - 90}deg`
    minEl.style.rotate = `${min * 6 - 90}deg`
    hourEl.style.rotate = `${(hour * 30 - 90) + min / 2}deg`


    // minEl.style.transform = `rotate${min * 6 - 90}deg`
    console.log(sec / 60 * 360 - 90)
}, 1000);