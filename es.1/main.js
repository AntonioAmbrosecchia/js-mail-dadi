/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando
metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.
*/


const mailInvitati = [
    "aldo.baglio@gmail.com",
    "giovanni.storti@gmail.com",
    "giacomo.poretti@gmail.com",
    "marina.la.moglie.di.aldo@gmail.com"
]
//console.log(mailInvitati);
const userEmail = prompt("Se sei stato invitato inserisci nell area di testo la tua mail")
let validatore = false;

for (let index = 0; index < mailInvitati.length; index++) {

    if (userEmail == mailInvitati[index]) {
        validatore = true;
        break;
    }
}

if (validatore === true) {
    console.log(alert("Permesso di accesso accordato"), "Utente valido")
} else {
    console.log(alert("Non sei stato invitato, contatta gli organizzatori"), "Utente non valido");

}