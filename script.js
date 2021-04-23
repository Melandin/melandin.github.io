const variableText = document.querySelector('.variable-text');
const value = document.getElementById('value');
const grad = document.getElementById('text-grad');

grad.oninput = function () {
  console.log(this.value);
  variableText.style.fontVariationSettings = `'ital' ${this.value}`;
};
