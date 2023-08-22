function updateDisplay() {
  const date = new Date();
  const hrDegree = (date.getHours() / 24) * 360;
  const minDegree = (date.getMinutes() / 60) * 360;
  const secDegree = (date.getSeconds() / 60) * 360;

  document.querySelector('.hrs').style.transform = `rotate(${hrDegree + 90}deg)`;
  document.querySelector('.mints').style.transform = `rotate(${minDegree + 90}deg)`;
  document.querySelector('.secs').style.transform = `rotate(${secDegree + 90}deg)`;
  document.querySelector('.time').innerHTML = `
  <p class="time-text">${padding(date.getHours())} : ${padding(date.getMinutes())} <span>${padding(
    date.getSeconds()
  )}</span></p>
  `;
}

function padding(number) {
  return number.toString().padStart(2, '0');
}

setInterval(updateDisplay, 1000);
