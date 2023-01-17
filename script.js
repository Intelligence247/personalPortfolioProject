// Constants
const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
let date = new Date;
let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
secEl.style.rotate = `${sec * 6 - 90}deg`
minEl.style.rotate = `${min * 6 - 90}deg`
hourEl.style.rotate = `${(hour * 30 - 90) + min / 2}deg`

setInterval(() => {
    let date = new Date;
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    secEl.style.rotate = `${sec * 6 - 90}deg`
    minEl.style.rotate = `${min * 6 - 90}deg`
    hourEl.style.rotate = `${(hour * 30 - 90) + min / 2}deg`
}, 1000);




// selector
const ampm = document.querySelector('.ampm')
const secd = document.querySelector('.secd')
const mind = document.querySelector('.mind')
const hourd = document.querySelector('.hourd')


const hourFuct = () => {
    let date = new Date()
    let hour = date.getHours()
    console.log(hour)
    // let hour = 12
    if (hour == 0) {
        return 12
    } else if (hour > 12 && hour <= 21) {
        return `0${hour - 12}`
    } else if (hour > 21) {
        return hour = hour - 12
    } else if (hour < 10) {
        return `0${hour}`
    } else {
        return hour
    }

}
console.log(hourFuct())
const funclength = (param) => {
    if (param < 10) {
        return `0${param}`
    } else {
        return param
    }
}

const ampmFunc = () => {
    let date = new Date()
    let hour = date.getHours()
    if (hour >= 12) {
        return 'PM'
    } else {
        return 'AM'
    }
}
hourd.innerText = `${hourFuct()}`
mind.innerText = `${funclength(new Date().getMinutes())}`
secd.innerText = `${funclength(new Date().getSeconds())}`
const dateFunc = () => {
    let date = new Date()
    const minute = date.getMinutes()
    const secs = date.getSeconds()
    hourd.innerText = `${hourFuct()}`
    mind.innerText = `${funclength(minute)}`
    secd.innerText = `${funclength(secs)}`
    ampm.innerText = ampmFunc()
}
setInterval(dateFunc, 1000)

ampm.innerText = ampmFunc()


const headerEl = document.querySelector('header')

const heroesEl = document.querySelector('.heroes')

const func = () => {
    for (let i = 0; i <= 50; i++) {
        heroesEl.innerHTML += `<img src="./media/plussvg.svg" alt="plus image"class="img1" style="top:${i + 3}em"> 
        <img src="./media/circsvg.svg" alt="circle image"
    style="top:${i + 2}em"> 
    <img src="./media/trisvg.svg" alt="triangle image" style="top:${i * 2.3}em">`
    }
}
func()
window.addEventListener('mousemove', (e) => {
    heroesEl.innerHTML = ''
    for (let i = 0; i <= 50; i++) {
        heroesEl.innerHTML += `<img src="./media/plussvg.svg" alt="plus image"class="img1" style="top:${(i + 3) + e.pageY / 250}em; right:${(i + 1.8) + e.pageX / 35}px;"> 
        <img src="./media/circsvg.svg" alt="circle image"
    style="top:${(i + 2) + e.pageY / 240}em; right:${(i + 3) + e.pageX / 40}px;"> 
    <img src="./media/trisvg.svg" alt="triangle image" style="top:${(i * 2.3) + e.pageY / 260}em" right:${(i + 3) + e.pageX / 45}px;>`

        /* `<img src="./media/plussvg.svg" alt="" style="top:${i};transform: translate3d(${e.pageX / 30}px,${e.pageY / 30}px,0px);">
             <img src="./media/circsvg.svg" alt=""
        style="transform: translate3d(${e.pageX / 30}px,${e.pageY / 30}px,0px);"> 
        <img src="./media/trisvg.svg" alt="" style="transform: translate3d(${e.pageX / 30}px,${e.pageY / 30}px,0px);">`*/
    }

})

 // let img1 = document.createElement('img')
    // let img2 = document.createElement('img')
    // let img3 = document.createElement('img')
    // headerEl.appendChild(img1)