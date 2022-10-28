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
    result = num1 +num2;
}