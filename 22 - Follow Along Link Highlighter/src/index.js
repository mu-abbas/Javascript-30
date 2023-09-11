const links = document.querySelectorAll('a');
const highlight = document.querySelector('.highlight');

function highlightUpdate() {
  const coords = this.getBoundingClientRect();
  console.log(coords);
  const coordsObj = {
    top: coords.top + window.scrollY,
    left: coords.left + window.scrollX,
    width: coords.width,
    height: coords.height,
  };

  highlight.style.transform = `translate(${coordsObj.left}px, ${coordsObj.top}px)`;

  setTimeout(function () {
    highlight.style.width = `${coordsObj.width}px`;
    highlight.style.height = `${coordsObj.height}px`;
  }, 100);
}

links.forEach(link => {
  link.addEventListener('mouseenter', highlightUpdate);
});
