const checkboxes = document.querySelectorAll('.check-box');

let lastchecked;

function handelShiftKey(e) {
  let inbetween = false;
  if (this.checked && e.shiftKey) {
    checkboxes.forEach(checkbox => {
      if (checkbox === lastchecked || checkbox === this) {
        inbetween = !inbetween;
      }

      if (inbetween) checkbox.checked = true;
    });
  }
  lastchecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handelShiftKey);
});
