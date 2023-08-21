window.addEventListener('keydown', function (e) {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  play(key);
});

window.addEventListener('click', function (e) {
  const key = e.target.closest('.key');
  play(key);
});

function play(key) {
  if (!key) return;
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function transitionRemove(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', transitionRemove));
