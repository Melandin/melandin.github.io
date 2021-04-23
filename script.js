const variableText = document.querySelector('.variable-text');
const value = document.getElementById('value');
const grad = document.getElementById('text-grad');

grad.oninput = function () {
  console.log(this.value);
  variableText.style.fontVariationSettings = `'ital' ${this.value}`;
};


const variableTextopsz = document.querySelector('.variable-textopsz');
const valueopsz = document.getElementById('valueopsz');
const gradopsz = document.getElementById('text-gradopsz');

opsz.oninput = function () {
  console.log(this.value);
  variableText.style.fontVariationSettings = `'opsz' ${this.value}`;
};
