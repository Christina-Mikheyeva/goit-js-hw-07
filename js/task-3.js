
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', welcomeName)

function welcomeName(event) {

    const value = event.target.value;
    const name = value.trim();
  if (name === "") {
    output.textContent = 'Anonymous';
    return;
  }
  output.textContent = name;
} 


