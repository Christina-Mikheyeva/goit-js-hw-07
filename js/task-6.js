function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const playsToAdd = document.querySelector("#boxes");
const min = 1;
const max = 100;

function createBoxes(amount) {
  
  if (amount >= min && amount <= max) {
    
    playsToAdd.innerHTML = ""
    let step = 30;
    
    for (let index = 0; index < amount; index++) {
      const newElement = document.createElement("div");
      newElement.classList.add("new-div")
      newElement.style.width = `${step}px`
      newElement.style.height = `${step}px`
      newElement.style.backgroundColor = getRandomHexColor()
      playsToAdd.appendChild(newElement)
      step +=10
    }
  }
}

destroy.addEventListener("click", () => { playsToAdd.innerHTML = ""});

create.addEventListener("click", () => {
  const amount = input.value
  createBoxes(amount)
});

// Decoration

const div = document.querySelector("#controls");
div.style.display = "flex";
div.style.gap = "10px";
div.style.backgroundColor = "rgba(246, 246, 254, 1)";
div.style.borderRadius = "8px";
div.style.padding = "32px";
div.style.marginBottom = "16px";
create.style.backgroundColor = "rgba(255, 78, 78, 1)";
input.classList.add("common")

const divBox = document.querySelector("#boxes");
divBox.style.backgroundColor = "rgba(246, 246, 254, 1)";
divBox.style.borderRadius = "8px";
divBox.style.padding = "32px";
