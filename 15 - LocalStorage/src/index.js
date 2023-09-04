const form = document.querySelector('.add-plate');
const plates = document.querySelector('.plates-list');

const items = loadLocalStorage();

function addPlate(e) {
  e.preventDefault();
  const plateName = this.querySelector('input').value;
  const plate = {
    plateName,
    checked: false,
  };
  items.push(plate);
  this.reset();

  updataLocalStorage();
  updateUI();
}

function updateUI() {
  const html = items
    .map((item, i) => {
      return `
      <li class="plates-list-item">
        <input type="checkbox" id="${i}" class="plate-checkbox" data-id="${i}" ${item.checked ? 'checked' : ''}/>
        <label for="${i}" class="plate-label">${item.plateName}</label>
        <button class="remove" data-id="${i}">❌</button>
      </li>
  `;
    })
    .join('');

  plates.innerHTML = html;
}

function updateState(e) {
  if (!e.target.classList.contains('plate-checkbox')) return;
  const id = e.target.dataset.id;
  items[id].checked = !items[id].checked;
  updataLocalStorage();
  updateUI();
}

function removeItem(e) {
  if (!e.target.classList.contains('remove')) return;
  const id = e.target.dataset.id;
  items.splice(id, 1);
  updataLocalStorage();
  updateUI();
}

function updataLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function loadLocalStorage() {
  const data = JSON.parse(localStorage.getItem('items'));
  return data ? data : [];
}

form.addEventListener('submit', addPlate);
plates.addEventListener('click', updateState);
plates.addEventListener('click', removeItem);
updateUI();
