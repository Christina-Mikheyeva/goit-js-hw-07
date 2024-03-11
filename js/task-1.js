
const massiveItems = categories.querySelectorAll(".item");
const numberCategories = massiveItems.length;
console.log (massiveItems)
console.log(`Number of categories: ${numberCategories}`) 

massiveItems.forEach(item => { textAndNumber(item) }) 

    function textAndNumber(item) {
    const namesElements = item.querySelector("h2").textContent;
    const numbersItems = item.querySelectorAll("li").length;
    console.log(`Category: ${namesElements}`);
    console.log(`Elements: ${numbersItems}`);
}