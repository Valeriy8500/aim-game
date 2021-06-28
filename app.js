const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = [
  'rgb(253, 123, 1)',
  'rgb(255, 238, 0)',
  'rgb(6, 248, 18)',
  'rgb(0, 30, 163)',
  'rgb(174, 0, 180)',
  'rgb(253, 1, 157)',
  'black',
  'grey',
  'green',
  'yellow',
  'brown',
  'blue'
];

let time = 0;
let score = 0;

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

board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++
    evt.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(dicreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

function dicreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    };
    setTime(current);
  }
};

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
};

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span></h1>`;
};

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.background = getRandomColor();

  board.append(circle);
};

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};