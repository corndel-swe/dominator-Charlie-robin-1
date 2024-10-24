// TODO: get a reference to the #button and #txt and #output
const button = document.getElementById("button")
const text = document.getElementById("txt")
const output = document.getElementById("output")

// TODO: add an event listener to the #button that changes the text in #output to the uppercase value of #txt

button.addEventListener("click", () => {
    output.textContent = text.value.toLocaleUpperCase();
})