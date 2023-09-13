const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const main = document.querySelector('main');

window.addEventListener('scroll', stickyNav);

function stickyNav() {
  const startPoint = main.getBoundingClientRect().top + window.scrollY - nav.offsetHeight;
  console.log(startPoint);
  if (startPoint <= window.scrollY) {
    nav.classList.add('fixed');
    body.style.marginTop = nav.offsetHeight + 'px';
  } else {
    nav.classList.remove('fixed');
    body.style.marginTop = '0px';
  }
}
