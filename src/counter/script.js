// TODO: increment and decrement the count when the buttons are clicked
const count = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");


increment.addEventListener("click", () => {
    count.textContent = +count.textContent + 1
})

decrement.addEventListener("click", () => {
    if (+count.textContent > 0) {
        count.textContent = +count.textContent - 1
    }
})