
let welcomeEl = document.getElementById("welcome-el")
let name = prompt("Please enter your name", "");
let greeting = "Witam i miłego dnia użytkowniku "

welcomeEl.innerText = greeting + name


let saveEl = document.getElementById("save-el")
let peopleCount = document.getElementById("people-counted")
let licznik = 0


function add(){
    licznik += 1
    peopleCount.textContent = licznik
}

function save(){
    let countStr = licznik + " - "
    saveEl.textContent += countStr
    peopleCount.textContent = 0
    licznik = 0
}











