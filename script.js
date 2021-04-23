const variableText = document.querySelector('.variable-text');
const value = document.getElementById('value');
const grad = document.getElementById('text-grad');

grad.oninput = function () {
  console.log(this.value);
  variableText.style.fontVariationSettings = `'ital' ${this.value}`;
};


const inputs = [].slice.call(document.querySelectorAll('.range__opsz .controls input'));

// listen for changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function handleUpdate(e) {      document.querySelector('.range__opsz').style.setProperty(`--${this.id}`, this.value);
}

