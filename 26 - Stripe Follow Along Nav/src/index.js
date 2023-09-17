const navItems = document.querySelectorAll('.nav-list-item');
const whiteMarker = document.querySelector('.white-marker');

function showDropDwon() {
  const item = this.querySelector('.nav-list-dropdown');

  console.log(item);

  this.classList.add('activate-drop-down');
  setTimeout(() => this.classList.add('show-drop-down'), 50);

  const coords = item.getBoundingClientRect();
  console.log(coords);

  const width = coords.width;
  const height = coords.height - 30;
  const top = coords.top + 30;
  const left = coords.left;

  console.log(width, height, left, top);

  whiteMarker.style.width = `${width}px`;
  whiteMarker.style.top = `${top}px`;
  whiteMarker.style.left = `${left}px`;
  whiteMarker.style.height = `${height}px`;
  whiteMarker.style.opacity = '1';
}

function hideDropDown(e) {
  this.classList.remove('activate-drop-down');
  this.classList.remove('show-drop-down');
  whiteMarker.style.opacity = '0';
}

navItems.forEach(item => item.addEventListener('mouseenter', showDropDwon));
navItems.forEach(item => item.addEventListener('mouseleave', hideDropDown));
