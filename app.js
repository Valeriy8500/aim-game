const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');

let time = 0;

startBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('time-btn')) {
    time = parseInt(evt.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

function startGame() {
  setInterval(dicreaseTime, 1000);
  timeEl.innerHTML = `00:${time}`;
};

function dicreaseTime() {
  let current = --time;
  if (current < 10) {
    current = `0${current}`;
  };

  timeEl.innerHTML = `00:${current}`;
};