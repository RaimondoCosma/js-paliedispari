"use strict";
/*-----------------------
    FUNCTIONS
-----------------------*/
function isPalindrome(element){
    let concElement = '';
    for ( let i=0; i < element.length; i++) {
        concElement += element[i];
        console.log(concElement);
    }
    let palElement = '';
    for ( let i=element.length - 1; i >= 0; i--) {
        palElement += element[i];
        console.log(palElement);
    }
    console.log(`${concElement} ==> ${palElement}`);
    if ( concElement === palElement ) {
        alert('La parola è palindroma');
    } else {
        alert('la parola non è palindroma')
    }
}

/*-----------------------
    MAIN
-----------------------*/
// Richiamo direttamente la funzione
isPalindrome(prompt('Inserisci una parola'));

// Metodo con variabili

// Imposto variabile che chiede l'inserimento di una parola all'utente
// const word = prompt('Inserisci una parola');

// Imposto variabile che verifichi la funzione
// const validate = isPalindrome(word);
