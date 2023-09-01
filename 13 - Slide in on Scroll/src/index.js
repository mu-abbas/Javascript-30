import { debounce } from 'lodash';

const images = document.querySelectorAll('img');

function slide() {
  const currentY = this.pageYOffset + window.innerHeight;
  images.forEach(img => {
    // console.log(currentY, img.offsetTop);
    if (img.offsetTop < currentY) img.classList.add('active');
  });
}

window.addEventListener('scroll', debounce(slide, 20));
