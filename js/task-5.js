function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const newColor = document.querySelector(".color")
btnChangeColor.addEventListener("change", changeColor)



function changeColor(event) { 
  document.body.style.backgroundColor = newColor
}
