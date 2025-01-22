let areaGioco = document.getElementById("areaGioco");

//CREIAMO LE CASELLE
for (i = 1; i <= 16; i++) {
    areaGioco.innerHTML += "<li></li>";
}

let caselle = document.querySelectorAll("li");

let numRandom = Math.floor(Math.random() * caselle.length);

let counter = document.querySelector(".counter");

for (let i = 0; i < caselle.length; i++) {
    caselle[i].onclick = function () {

        if (i == numRandom) {
            this.classList.add("bomb");
            endGame();

        } else {
            this.classList.add("rainbow");
            counter.innerHTML++;
        }

    }
}

//----CREIAMO UNA FUNZIONE PER FINE GIOCO----//
let messEndGame = document.querySelector("h2")
let bloccaGioco = document.getElementById("bloccaGioco");
let button = document.querySelector("button");

function endGame() {
    messEndGame.style.display = "block";
    bloccaGioco.style.display = "block";
    button.style.display = "block";
}

button.onclick = function() {
    location.reload();
}