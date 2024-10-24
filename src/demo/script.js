// TODO: get a reference to the .box element and log it to the console
// TAKES A VALID CSS SELECTOR
const box = document.querySelector(".box");

console.dir(box)

box.style.backgroundColor = "red";

// TODO: add an event listener to the .box element that toggles the .left class

box.addEventListener("click", () => {
    box.classList.toggle("left");
    console.log(box.classList);
})


// TODO: get a reference to #button, #txt and #output
const button = document.querySelector("#button");
const text = document.getElementById("txt");
const output = document.getElementById("output");

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt

button.addEventListener("click", () => {
    const inputText = text.value.toLowerCase();
    output.textContent = inputText;
})


// npm i -D live-server