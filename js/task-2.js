
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
    'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
    'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
    'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const playsToAdd = document.querySelector(".gallery");

const elementLi0 = document.createElement("li")
const elementLi1 = document.createElement("li")
const elementLi2 = document.createElement("li")


 



const elementImg0 = document.createElement("img");
elementImg0.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
elementImg0.alt = 'White and Black Long Fur Cat';
elementImg0.width = "320";
elementImg0.classList.add("images-item")

const elementImg1 = document.createElement("img");
elementImg1.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
elementImg1.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
elementImg1.width = "320";
elementImg1.classList.add("images-item")

const elementImg2 = document.createElement("img");
elementImg2.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
elementImg2.alt = 'Group of Horses Running';
elementImg2.width = "320";
elementImg2.classList.add("images-item")

playsToAdd.append(elementLi0)
playsToAdd.append(elementLi1)
playsToAdd.append(elementLi2)

elementLi0.append(elementImg0)
elementLi1.append(elementImg1)
elementLi2.append(elementImg2)




// const playsToAdd = document.querySelector(".gallery");

// const createElements = element => {
//   return [
//     document.createElement(element),
//     document.createElement(element),
//     document.createElement(element)
//   ]
// }

// const li = createElements("li");
// playsToAdd.append(...li);

// const img = createElements("img");
// li.append(img);


// console.log(img.map(element => {li.append(element)}))
// console.log(playsToAdd.append(...createElements("img")));


// const playsToAdd = document.querySelector(".gallery");
// const elementLi = document.createElement("li");

// const elementImg = document.createElement("img");
// elementImg.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// elementImg.alt = 'White and Black Long Fur Cat';
// elementImg.width = "320";
// elementImg.classList.add("images-item")

// elementLi.append(elementImg)
// playsToAdd.append(elementLi)
// console.log(elementLi);


// const playsToAdd = document.querySelector(".gallery");

// const a = [];
// const b = [];
// function createElement(attributes) { 
//   images.map(img => (a.push(img.url)))
//   images.map(img => (b.push(img.alt)))
// }
// createElement (images)

// console.log(b);



