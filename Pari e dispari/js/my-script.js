"use strict";

/*-------------------
    FUNCTIONS
-------------------*/
// Funione per capire se il numero è pari
function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    return false;
}
// Funzione per generare numeri random dentro un range stabilito
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione per creare la somma tra due numeri
function sum(num1, num2) {
    let result;
    return result = num1 +num2;
}

/*-------------------
    MAIN
-------------------*/
let oddEven = prompt('Scegli tra "pari" e "dispari" e scrivilo nel promp');
console.log(oddEven);

let userNumber = Number(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

let randomNumBot = getRndInteger(1, 5);
console.log(randomNumBot);

let total = sum(userNumber, randomNumBot);
console.log(total)

// Scrivo le condizioni di vittoria
if ((oddEven === "pari" && isEven(total)) || (oddEven === "dispari" && !isEven(total))){
    alert('Complimenti hai Vinto!');
} else {
    alert('Mi dispiace hai perso!');
}

