const items = [...document.querySelectorAll('[data-time]')];

const seconds = items
  .map(item => item.dataset.time)
  .map(time => {
    const [min, sec] = time.split(':').map(unit => +unit);
    return min * 60 + sec;
  })
  .reduce((acc, curr) => (acc += curr));

let leftSeconds = seconds;

const hours = Math.floor(leftSeconds / 3600);
leftSeconds = leftSeconds % 3600;
const mints = Math.floor(leftSeconds / 60);
const secs = leftSeconds % 60;

console.log(`Total Duration is ${hours}:${mints}:${secs}`);
