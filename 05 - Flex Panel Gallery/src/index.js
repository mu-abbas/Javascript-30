const panels = document.querySelectorAll('.panel');

function openPanle(e) {
  if (!this.classList.contains('open')) panels.forEach(panel => panel.classList.remove('open'));
  this.classList.toggle('open');
  // if (!e.propertyName.includes('flex')) return;
  if (!this.classList.contains('active')) panels.forEach(panel => panel.classList.remove('active'));
  this.classList.toggle('active');
}

panels.forEach(panel => {
  panel.addEventListener('click', openPanle);
});
