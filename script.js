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
    for (let i = 0; i <= 30; i++) {
        heroesEl.innerHTML += `<img src="./media/plussvg.svg" alt="" style="transform: translateX(${i * 7}rem);"> <img src="./media/circsvg.svg" alt=""
    style=""> <img src="./media/trisvg.svg" alt="" style="">`
    }
}
func()
window.addEventListener('mousemove', (e) => {
    heroesEl.innerHTML = ''
    for (let i = 0; i <= 30; i++) {
        heroesEl.innerHTML += `<img src="./media/plussvg.svg" alt="" style="transform: translate3d(${e.pageX / 30}px,${e.pageY / 30}px,0px);">
         <img src="./media/circsvg.svg" alt=""
    style="transform: translate3d(${e.pageX / 30}px,${e.pageY / 30}px,0px);"> 
    <img src="./media/trisvg.svg" alt="" style="transform: translate3d(${e.pageX / 30}px,${e.pageY / 30}px,0px);">`
    }

})

 // let img1 = document.createElement('img')
    // let img2 = document.createElement('img')
    // let img3 = document.createElement('img')
    // headerEl.appendChild(img1)