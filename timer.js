const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const btnStop = document.getElementById('btnStop');
const btnStart = document.getElementById('btnStart');
const btnReset = document.getElementById('btnReset');

let _hour = 0;
let _minute = 0;
let _second = 0;
let _interval;
let isStarted = false;

const addAllEventListeners = () => {

    btnStart.addEventListener('click', function () {
        if (!isStarted) {
            _interval = setInterval(doTimerStart, 1000);
            isStarted = true;
        }

    });

    btnStop.addEventListener('click', stopTimer);
    btnReset.addEventListener('click', resetTimer);
}

const doTimerStart = () => {
    _second++;
    if (_second === 60) {
        _second = 0;
        _minute++;
    }

    if (_minute === 60) {
        _minute = 0;
        _hour++;
    }

    if (_hour === 24) {
        _hour = 0;
        _minute = 0;
        _second = 0;
    }



    setTimerDisplay();
}

const setTimerDisplay = () => {

    if(second.textContent !== String(_second).padStart(2,"0")){
        second.classList.remove('slide-up');
        second.classList.add('slide-down');

        setTimeout(()=>{
            second.textContent = formatTimeValue(_second);
            second.classList.remove('slide-down');
            second.classList.add('slide-up');
        },500)

    }

    if(minute.textContent !== String(_minute).padStart(2,"0")){
        minute.classList.remove('slide-up');
        minute.classList.add('slide-down');

        setTimeout(()=>{
            minute.textContent = formatTimeValue(_minute);
            minute.classList.remove('slide-down');
            minute.classList.add('slide-up');
        },500)
    }

    if(hour.textContent !== String(_hour).padStart(2,"0")){
        hour.classList.remove('slide-up');
        hour.classList.add('slide-down');

        setTimeout(()=>{
            hour.textContent = formatTimeValue(_hour);
            hour.classList.remove('slide-down');
            hour.classList.add('slide-up');
        },500)
    }




    // second.textContent = formatTimeValue(_second);
    // minute.textContent = formatTimeValue(_minute);
    // hour.textContent = formatTimeValue(_hour);
}

const formatTimeValue = (time) => {
    return time.toString().padStart(2, "0");
}

const stopTimer = () => {
    isStarted = false;
    clearInterval(_interval);
}

const resetTimer = () => {
    stopTimer();
    _hour = 0;
    _second = 0;
    _minute = 0;
    setTimerDisplay();
}

addAllEventListeners();