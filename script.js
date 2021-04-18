// get the inputs
const inputs = [].slice.call(document.querySelectorAll('.range__slant .controls input'));

// listen for changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function handleUpdate(e) {      document.querySelector('.range__slant').style.setProperty(`--${this.id}`, this.value);
}