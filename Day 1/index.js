
// document.getElementById("count-el").innerText = 5

let count = 0

function increment() {
    count++;
    document.getElementById("count-el").textContent = count;
}

function save() {
    console.log(count)
    document.getElementById("save-el").textContent += count + " - "
    document.getElementById("count-el").textContent = count = 0
}