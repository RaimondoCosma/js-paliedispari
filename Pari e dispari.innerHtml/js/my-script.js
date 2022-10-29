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
// Dichiaro le variabili associate al mio DOM

// Dichiaro le variabili relative ai warning banner degli input
let warningChoose = document.querySelector('#warning-choose');
let warningChooseNumber = document.querySelector('#warning-choose-number');

// Dichiaro la variabile sul bottone per cominciare il gioco
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {    
    // Variabili per collegare i miei elementi html con js
    let bannerSpan = document.querySelector('#banner');
    let totalSpan = document.querySelector('.total');
    let botNumberSpan = document.querySelector('.bot-number');
    const oddEvenInput = document.getElementById('odd-even');
    let oddEven = oddEvenInput.value;
    // Dichiaro le condizioni di input sulla scelta di pari e dispari
    if ( oddEven === 'pari' || oddEven === 'dispari' ) {
        warningChoose.classList.remove('show','zoom-in')
        console.log(`La tua scelta è: ${oddEven}`);
    } else if ( oddEven === '' ) {
        warningChoose.classList.add('show','zoom-in');
        // Aggiungo la classe che da effetto shake se inserisco input sbagliato
        oddEvenInput.classList.add('shake');
        // Rimuovo la classe dopo 400ms per ripresentarla nel caso di input nuovamente errato
        setTimeout (function() {
            oddEvenInput.classList.remove('shake');
        }, 400);
        warningChoose.innerHTML = (`Non hai inseriro alcun carattere`);
        return submitBtn;
    } else {
        warningChoose.classList.add('show','zoom-in');
        oddEvenInput.classList.add('shake');
        setTimeout (function() {
            oddEvenInput.classList.remove('shake');
        }, 400);
        warningChoose.innerHTML = (`"${oddEven}" non è pari o dispari`);
        return submitBtn;
    }
    
    const userNumberInput = document.getElementById('your-number');
    let userNumber = userNumberInput.value;
    // Dichiaro le condizioni di input sulla scelta del numero
    if ( !(isNaN(userNumber)) && (userNumber >= 1 && userNumber <= 5) ) {
        warningChooseNumber.classList.remove('show','zoom-in')
        console.log(`La tua scelta è: ${userNumber}`);
    } else if ( userNumber === '' ) {
        warningChooseNumber.classList.add('show','zoom-in')
        // Anche qui inserisco classe che da effetto shake se input errato
        userNumberInput.classList.add('shake');
        // Rimuovo la classe shake nel caso di input nuovamente errato
        setTimeout (function() {
            userNumberInput.classList.remove('shake');
        }, 400);
        warningChooseNumber.innerHTML = (`Non hai inserito alcun numero`);
        return userNumber;
    } else {
        warningChooseNumber.classList.add('show','zoom-in')
        userNumberInput.classList.add('shake');
        setTimeout (function() {
            userNumberInput.classList.remove('shake');
        }, 400);
        warningChooseNumber.innerHTML = (`"${userNumber}" non è un numero compreso tra "1" e "5"`);
        return userNumber;
    }

    // Aggiungo la classe show al div relativo al numero random del BOT
    botNumberSpan.classList.add('show');
    let botNumber = document.querySelector('.bot-number').innerHTML = getRndInteger(1, 5);
    console.log(botNumber);

    // Aggiungo la classe show al div relativo al totale
    totalSpan.classList.add('show');
    let total = document.querySelector('.total').innerHTML = sum(Number(userNumber), botNumber);
    console.log(userNumber, botNumber);
    console.log(total);

    // Aggiungo le condizioni di vittoria con relativo messaggio in caso di vittoria o sconfitta
    if ((oddEven === "pari" && isEven(total)) || (oddEven === "dispari" && !isEven(total))){
        bannerSpan.classList.add('show');
        setTimeout (function() {
            let banner = document.getElementById('banner').innerHTML = `<span style="color: green; font-style: italic;">Complimenti! Hai Vinto</span>`;
        }, 500);
    } else {
        bannerSpan.classList.add('show');
        setTimeout (function() {
            let banner = document.getElementById('banner').innerHTML = "Mi Dispiace! Hai Perso";
        }, 500);
    }
});

// Aggiungo l'evento click al bottone reset
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', function(){
    let bannerSpan = document.querySelector('#banner');
    let totalSpan = document.querySelector('.total');
    let botNumberSpan = document.querySelector('.bot-number');
    const oddEven = document.getElementById('odd-even');
    oddEven.value ="";
    const yourNumber = document.getElementById('your-number');
    yourNumber.value = "";
    botNumberSpan.classList.remove('show');
    botNumberSpan = "";
    totalSpan.classList.remove('show');
    bannerSpan.classList.remove('show');
    warningChoose.classList.remove('show','zoom-in');
    warningChooseNumber.classList.remove('show','zoom-in')
    return resetBtn;
})