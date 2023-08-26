const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

const url =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(url)
  .then(res => res.json())
  .then(data => cities.push(...data));

console.log(cities);

function searchResults(word, data) {
  return data.filter(
    place =>
      place.city.toLowerCase().includes(word.toLowerCase()) || place.state.toLowerCase().includes(word.toLowerCase())
  );
}

function displayResults() {
  const word = this.value;
  if (word == '') {
    suggestions.innerHTML = `
          <li class="suggestions-item">
            <p>filter for a city</p>
          </li>
          <li class="suggestions-item">
            <p>or a state</p>
          </li>
    `;
    return;
  }
  const data = searchResults(word, cities);
  const html = `
  ${data
    .map(place => {
      const cityName = place.city;
      const stateName = place.state;
      const population = +place.population;

      if (place.city.toLowerCase().includes(word.toLowerCase())) {
        cityName = place.city.toLowerCase().replace(word.toLowerCase(), `<span class='hl'>${word}</span>`);
      }
      if (place.state.toLowerCase().includes(word.toLowerCase())) {
        stateName = place.state.toLowerCase().replace(word.toLowerCase(), `<span class='hl'>${word}</span>`);
      }
      console.log(population);
      return `
        <li class="suggestions-item">
          <p>${cityName}, ${stateName}</p>
          <p>${population.toLocaleString('en-US')}</p>
        </li>
    `;
    })
    .join('')}
  `;

  suggestions.innerHTML = html;
}

search.addEventListener('change', displayResults);
search.addEventListener('keyup', displayResults);
