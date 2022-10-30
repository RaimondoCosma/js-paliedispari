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
// Aggiungo validazione all'input in modo che l'utente possa scrivere o "pari" o "dispari"
let oddEven;
while ( oddEven !== 'pari' || oddEven !== 'dispari' ) {
    oddEven = prompt('Scegli tra "pari" o "dispari" e scrivilo');
    if ( oddEven === 'pari' || oddEven === 'dispari' ) {
        break;
    }
    alert(`"${oddEven}" non è pari o dispari`);
}
console.log(`La tua scelta è: ${oddEven}`);

// Aggiungo validazione all'imput in modo che il numero scelto dall'utente non sia una stringa e sia un numero compreso tra 1 e 5
let userNumber;
while ( isNaN(userNumber) || (userNumber < 1 || userNumber > 5) ) {
    userNumber = Number(prompt('Scegli un numero da 1 a 5'));
    if ( !isNaN(userNumber) && (userNumber >= 1 && userNumber <= 5) ) {
        break;
    }
    alert(`Attenzione! "${userNumber}" non è un numero da 1 a 5`);
}
console.log(`Il numero da te scelto è: ${userNumber}`);

let randomNumBot = getRndInteger(1, 5);
console.log(`Il numero del computer è: ${randomNumBot}`);

let total = sum(userNumber, randomNumBot);
console.log(`Il totale è: ${total}`)

// Scrivo le condizioni di vittoria
if ((oddEven === "pari" && isEven(total)) || (oddEven === "dispari" && !isEven(total))){
        alert('Complimenti hai Vinto!');
} else {
    alert('Mi dispiace hai perso!');
}

