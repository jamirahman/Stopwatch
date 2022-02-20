const milliSecondEl = document.getElementById('millisecond-el')
const secondEl = document.getElementById('second-el')
const minuteEl = document.getElementById('minute-el')
const startButtonEl = document.getElementById('start-btn')
const stopButtonEl = document.getElementById('stop-btn')
const resetButtonEl = document.getElementById('reset-btn')

let isStart = false
isStop = false
let min = 0
let sec = 0
let milliSec = 0
let myTimerVar


startButtonEl.addEventListener('click', () => {
    if (isStart){
        return
    } else {
        start ()
        isStart = true
        isStop = false
    }
})

stopButtonEl.addEventListener('click', () => {
    clearInterval(myTimerVar)
    isStart = false
    isStop = true
})

resetButtonEl.addEventListener('click', () => { 
    if(isStop){
        reset()
    }
    else return
})


function start () {  
    myTimerVar = setInterval(myTimer, 10) 
}


function myTimer () {
    if(milliSec < 100) {
        milliSecondEl.innerText = getFormat(milliSec)
        milliSec++
    } else {
        milliSec = 0
        sec++
        if(sec < 60){
            secondEl.innerText = getFormat(sec)
        }else{
            sec = 0
            min++
            if(min < 60) {
                minuteEl.innerText = getFormat(min)
            }else{
                min = 0
                minuteEl.innerText = getFormat(min)
            }
            secondEl.innerText = getFormat(sec)
        }
        milliSecondEl.innerText = getFormat(milliSec)
        milliSec++
        
    }
}


function reset () {
    min = 0
    sec = 0
    milliSec = 0
    milliSecondEl.innerText = getFormat(milliSec)
    secondEl.innerText = getFormat(sec)
    minuteEl.innerText = getFormat(min)

}


function getFormat(count) {
    let time = ''
    if(count < 10) {
        time = `0${count}`
        return time
    }
    return time = count    
}

 