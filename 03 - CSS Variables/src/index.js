const inputs = document.querySelectorAll('.label input');

console.log(inputs);

function update() {
  const suffix = this.dataset.suffix || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => {
  input.addEventListener('change', update);
  input.addEventListener('mousemove', update);
});
