"use strict";
/*-----------------------
    FUNCTIONS
-----------------------*/
function isPalindrome(element){
    let concElement = '';
    for ( let i = 0; i < element.length; i++) {
        concElement += element[i];
    }
    let palElement = '';
    for ( let i = element.length - 1; i >= 0; i--) {
        palElement += element[i];
    }
    console.log(`${concElement} ==> ${palElement}`);
    if ( concElement.replace(/\W/g, "").toLowerCase() === palElement.replace(/\W/g, "").toLowerCase() ) {
        return true;
    } 
    return false;
}

/*-----------------------
    MAIN
-----------------------*/
// Richiamo direttamente la funzione
// isPalindrome(prompt('Inserisci una parola'));

// Metodo con variabili

// Imposto variabile che chiede l'inserimento di una parola all'utente
const word = prompt('Inserisci una parola');

// Imposto variabile che verifichi la funzione
if (isPalindrome(word)) {
    alert('La parola è palindroma!');
} else {
    alert('La parola NON è palindroma');
}
