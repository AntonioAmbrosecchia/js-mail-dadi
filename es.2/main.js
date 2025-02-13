/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
*/

const numGiocatore = Math.floor(Math.random() * 6 + 1);
const numComputer = Math.floor(Math.random() * 6 + 1);

console.log(numGiocatore);
console.log(numComputer);

if (numGiocatore > numComputer) {
    console.log(alert("Hai vinto!!"), "Hai vinto!!");

} else if (numComputer > numGiocatore) {
    console.log(alert("Ha vinto il PC"), "Ha vinto il PC");

} else {
    console.log(alert("Pareggio! Ricarica la pagina e riprova"), "Pareggio! Ricarica la pagina e riprova");

}