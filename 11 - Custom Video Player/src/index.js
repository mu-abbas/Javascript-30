const container = document.querySelector('.player-container');
const progress = document.querySelector('.progress-bar');
const progressPlayed = document.querySelector('.progress-bar-played');
const pause = document.querySelector('.pause');
const ranges = document.querySelectorAll('.ranges');
const skips = document.querySelectorAll('.skip');
const video = document.querySelector('video');

function updateState() {
  video.paused ? video.play() : video.pause();
  updateBtn();
}

function updateBtn() {
  if (video.paused) {
    pause.textContent = '►';
  } else {
    pause.textContent = '❚ ❚';
  }
}

function updateTime(e) {
  const time = +e.target.dataset.duration;
  video.currentTime += time;
}

function updateRange() {
  video[`${this.name}`] = `${this.value / 100}`;
}

function updateBar() {
  progressPlayed.style.flexBasis = `${(this.currentTime / this.duration) * 100}%`;
}

[video, pause].forEach(ele => {
  ele.addEventListener('click', updateState);
});

skips.forEach(ele => {
  ele.addEventListener('click', updateTime);
});

ranges.forEach(range => {
  range.addEventListener('change', updateRange);
  range.addEventListener('mousemove', updateRange);
});

video.addEventListener('timeupdate', updateBar);
