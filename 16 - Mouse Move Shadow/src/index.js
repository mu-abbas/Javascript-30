const body = document.querySelector('body');
const text = document.querySelector('h1');

body.addEventListener('mousemove', action);

function action(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  const width = this.offsetWidth;
  const height = this.offsetHeight;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const walkX = Math.round((x / width) * 300) - 50;
  const walkY = Math.round((y / height) * 300) - 50;

  text.style.textShadow = `${walkX}px ${walkY}px 0 rgba(0,0,255,0.3), ${-walkX}px ${walkY}px 0 rgba(0,255,255,0.3), ${walkX}px ${-walkY}px 0 rgba(255,0,255,0.3), ${-walkX}px ${-walkY}px 0 rgba(255,200,255,0.3)`;
}
