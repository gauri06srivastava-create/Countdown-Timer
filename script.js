const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const userDate = document.getElementById('userDate');
const startBtn = document.getElementById('startBtn');

let timerInterval;

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const updatetarget = (deadline) => {
    const currtime = new Date();
    const diff = deadline - currtime;

    if (diff <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        mins.textContent = "00";
        secs.textContent = "00";
        clearInterval(timerInterval);
        return;
    }

    const calsecs = Math.floor(diff / 1000) % 60;
    const calmins = Math.floor(diff / (1000 * 60)) % 60;
    const calhours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const caldays = Math.floor(diff / (1000 * 60 * 60 * 24));

    days.textContent = formatTime(caldays);
    hours.textContent = formatTime(calhours);
    mins.textContent = formatTime(calmins);
    secs.textContent = formatTime(calsecs);
};

startBtn.addEventListener("click", () => {
    if (!userDate.value) {
        alert("Please select date & time");
        return;
    }

    const targetdate = new Date(userDate.value);

    clearInterval(timerInterval);
    updatetarget(targetdate); 
    timerInterval = setInterval(() => updatetarget(targetdate), 1000);
});
