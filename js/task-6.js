function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelectorAll("#controls button");
const playsToAdd = document.querySelector("#boxes");

input.addEventListener("input", () => { })
create[0].addEventListener("click",createBoxes)
create[1].addEventListener("click", destroyBoxes)

const min = input.event.target.min
const max = input.event.target.max
const inputValue = input.event.target.value

function createBoxes(amount) {
  let step = 10;

  if (inputValue >= min && inputValue <= max) {
    
    for (let index = 0; index < amount; index++) {
      const newElement = document.createElement("div");
      newElement.style.width = "30px"
      newElement.style.height = "30px"
      newElement.style.backgroundColor = getRandomHexColor()
      newElement.style.width = `${step}px`
      newElement.style.height = `${step}px`
      playsToAdd.innerHTML = newElement
    }
  }
}

createBoxes(1)

function destroyBoxes() {
  playsToAdd.innerHTML = ""
}


// Decoration

const div = document.querySelector("#controls");
div.style.display = "flex"
div.style.gap = "10px"
div.style.backgroundColor = rgba(246, 246, 254, 1)
div.style.borderRadius = "8px";
div.style.padding = "32px";
div.style.marginBottom = "16px";
create[1].style.backgroundColor = rgba(255, 78, 78, 1)
input.classList.add("common")

const divBox = document.querySelector("#boxes");
divBox.style.backgroundColor = rgba(246, 246, 254, 1)
divBox.style.borderRadius = "8px";
divBox.style.padding = "32px";

