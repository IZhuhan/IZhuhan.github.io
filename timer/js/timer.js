const buttons = document.querySelectorAll('[data-time]');
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end');
const heart = document.querySelector('.far.fa-heart');
let countdown;

buttons.forEach(btn => btn.addEventListener('click', start, event));

function start(event) {
    const now = Date.now();
    const then = new Date(2019, 05, 13, 06, 35, 00);
    let timeMeasure;
    if (!!event) timeMeasure = event.target.dataset.time;

    clearInterval(countdown);

    countdown = setInterval( () => {
        secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            heart.style.display = 'inline';
            timerDisplay.style.fontSize = '5rem';
            timerDisplay.textContent = 'Я вже зовсім поруч, коханий мій ';
            return;
        }

        displayTimeLeft(secondsLeft, timeMeasure);
    }, 1000);
}

function displayTimeLeft(seconds, timeMeasure = 'days') {
    let display, 
        days,
        hours,
        minutes,
        reminderSeconds;

    switch (timeMeasure) {
        case 'days':
            days = Math.floor(seconds / 86400);
            hours = Math.floor(seconds % 86400 / 3600);
            minutes = Math.floor(seconds % 3600 / 60);
            reminderSeconds = seconds % 60;

            display = `${days === 0 ? '' : days}
                       ${days === 0 ? '' : 
                         days === 1 ? 'день' : 
                         days > 1 && days < 5 ? 'дні' : 'днів'}
                       ${timeDisplayTemplate(hours)}:${timeDisplayTemplate(minutes)}:${timeDisplayTemplate(reminderSeconds)}`;

            break;
        case 'hours':
            hours = Math.floor(seconds / 3600);
            minutes = Math.floor(seconds % 3600 / 60);
            reminderSeconds = seconds % 60;

            display = `${timeDisplayTemplate(hours)}:${timeDisplayTemplate(minutes)}:${timeDisplayTemplate(reminderSeconds)}`;

            break;
        case 'minutes': 
            minutes = Math.floor(seconds / 60);
            reminderSeconds = seconds % 60;

            display = `${timeDisplayTemplate(minutes)}:${timeDisplayTemplate(reminderSeconds)}`;

            break;
        case 'seconds':
            display = `${timeDisplayTemplate(seconds)}`;

            break;
    }

    document.title = display;
    timerDisplay.textContent = display;
}

function timeDisplayTemplate(timeMeasure) {
    return `${timeMeasure < 10 ? '0' : ''}${timeMeasure}`;
}

start();