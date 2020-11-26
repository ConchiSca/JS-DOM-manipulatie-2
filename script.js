
// deel1

// unordered lists
const ul1 = document.querySelector(".big-five-list");
const ul2 = document.querySelector(".spotted-animals-list");


// buttons
const lionButton = document.querySelector(".big-five-button-lion");
const leopardButton = document.querySelector(".big-five-button-leopard");
const elephantButton = document.querySelector(".big-five-button-elephant");
const rhinoButton = document.querySelector(".big-five-button-rhino");
const buffaloButton = document.querySelector(".big-five-button-buffalo");


//functions + eventListeners

const spottedLion = () => {
    lionButton.remove();
    const listElement1 = document.createElement("li");
    const addlion = document.getElementsByClassName(".spotted-animals-list");
    ul2.appendChild(listElement1);
    listElement1.innerHTML = "Lion";
}
lionButton.addEventListener("click", spottedLion);

const spottedLeopard = () => {
    leopardButton.remove();
    const listElement2 = document.createElement("li");
    const addLeopard = document.getElementsByClassName(".spotted-animals-list");
    ul2.appendChild(listElement2);
    listElement2.innerHTML = "Leopard";
}
leopardButton.addEventListener("click", spottedLeopard);

const spottedElephant = () => {
    elephantButton.remove();
    const listElement3 = document.createElement("li");
    const addElephant = document.getElementsByClassName(".spotted-animals-list");
    ul2.appendChild(listElement3);
    listElement3.innerHTML = "Elephant";
}
elephantButton.addEventListener("click", spottedElephant);

const spottedRhino = () => {
    rhinoButton.remove();
    const listElement4 = document.createElement("li");
    const addRhino = document.getElementsByClassName(".spotted-animals-list");
    ul2.appendChild(listElement4);
    listElement4.innerHTML = "Rhino";
    
}
rhinoButton.addEventListener("click", spottedRhino);

const spottedBuffalo = () => {
    buffaloButton.remove();
    const listElement5 = document.createElement("li");
    const addBuffalo = document.getElementsByClassName(".spotted-animals-list");
    ul2.appendChild(listElement5);
    listElement5.innerHTML = "Buffalo";
}
buffaloButton.addEventListener("click", spottedBuffalo);


// deel 2

const removeOneButton = document.querySelector("#remove-first-item-button");
const duckLi = document.querySelector(".spotted-animals-list-item");

const removeFirst = () => {
    duckLi.remove();
}
removeOneButton.addEventListener("click", removeFirst);


// deel 3

const removeAll = document.querySelector("#remove-all-button");

const removeAllLi = () => {
    const ul2 = document.querySelector(".spotted-animals-list").innerHTML = "";
}
removeAll.addEventListener("click", removeAllLi)















