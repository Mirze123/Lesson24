const allInputs = document.getElementsByTagName('input');
[inpHour, inpMinute, inpSecond] = allInputs;
const spHour = document.getElementById('spHour');
const spSecond = document.getElementById('spSecond');
const spMinute = document.getElementById('spMinute');
const VALUE_59 = 59;
const VALUE_24 = 24;
const gameOver = document.getElementById('gameOver');

let _interval;
let _hour, _minute, _second;

const btnStop = document.getElementById('btnStop');
const btnStart = document.getElementById('btnStart');
const btnReset = document.getElementById('btnReset');

const inpArea = document.querySelector(".inp-area");

const addAllEventListeners = () => {
    inpArea.addEventListener('keyup', setRealTimeValue);
    btnStart.addEventListener('click', function () {
        gameOver.style.display = "none";
        _hour = customParseInt(inpHour.value);
        _minute = customParseInt(inpMinute.value);
        _second = customParseInt(inpSecond.value);
        _interval = setInterval(doCountDown, 10);
    })
}

const setRealTimeValue = (e) => {
    let time;
    e.target.value = getOnlyTwoValue(e.target.value);
    if (e.target.id === "hour") {

        time = e.target.value;
        if (e.target.value !== "" && parseInt(e.target.value) > VALUE_24) {
            time = VALUE_24;
        }
        spHour.textContent = formatTimeValue(time);
    }
    if (e.target.id === "minute") {
        time = e.target.value;
        if (e.target.value !== "" && parseInt(e.target.value) > VALUE_59) {
            time = VALUE_59;
        }
        spMinute.textContent = formatTimeValue(time);
    }
    if (e.target.id === "second") {
        time = e.target.value;
        if (e.target.value !== "" && parseInt(e.target.value) > VALUE_59) {
            time = VALUE_59;
        }
        spSecond.textContent = formatTimeValue(time);
    }

}


const formatTimeValue = (time) => {
    return time.toString().padStart(2, "0");
}

const getOnlyTwoValue = (value) => {
    return value.length > 2 ? value.substring(0, 2) : value;
}

const doCountDown = () => {

    // check that count ended or not
    if (_second === 0 && _minute === 0 && _hour === 0) {
        clearInterval(_interval);
        gameOver.style.display = "block";
        return;
    }

    if (_second === 0 && _minute !== 0) {
        _second = 60;
        _minute--;
    }

    if (_minute === 0 && _hour !== 0) {
        _minute = 59;
        _second = 60;
        _hour--;
    }
    _second--;
    setTimerDisplay();

}


function customParseInt(value) {
    if (value === "") {
        return value = 0;
    }
    return parseInt(value);
}

const setTimerDisplay = () => {
    spSecond.textContent = formatTimeValue(_second);
    spMinute.textContent = formatTimeValue(_minute);
    spHour.textContent = formatTimeValue(_hour);
}


addAllEventListeners();