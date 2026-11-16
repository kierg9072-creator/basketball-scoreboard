let homeScore = 0;
let guestScore = 0;
let homeFouls = 0;
let guestFouls = 0;
let quarter = 1;

let timeLeft = 600; // 10 minutes in seconds
let timerInterval = null;

function addScore(team, points) {
  if (team === 'home') {
    homeScore = Math.max(0, homeScore + points);
    document.getElementById('home-score').innerText = homeScore;
  } else {
    guestScore = Math.max(0, guestScore + points);
    document.getElementById('guest-score').innerText = guestScore;
  }
}

function addFoul(team) {
  if (team === 'home') {
    homeFouls++;
    document.getElementById('home-fouls').innerText = homeFouls;
  } else {
    guestFouls++;
    document.getElementById('guest-fouls').innerText = guestFouls;
  }
}

function nextQuarter() {
  quarter = quarter < 4 ? quarter + 1 : 1;
  document.getElementById('quarter').innerText = quarter;
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("End of Quarter!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = 600;
  updateTimerDisplay();
}

function resetGame() {
  homeScore = 0;
  guestScore = 0;
  homeFouls = 0;
  guestFouls = 0;
  quarter = 1;
  document.getElementById('home-score').innerText = 0;
  document.getElementById('guest-score').innerText = 0;
  document.getElementById('home-fouls').innerText = 0;
  document.getElementById('guest-fouls').innerText = 0;
  document.getElementById('quarter').innerText = 1;
  resetTimer();
}