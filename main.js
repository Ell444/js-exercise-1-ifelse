//1. *Il Caffè*: Chiedi all'utente quante tazze di caffè ha venduto oggi. Calcola il totale dei guadagni per il giorno e visualizza un messaggio con il risultato.//

//let caffeDelGiorno = prompt("Quanti caffe hai venduto oggi?");
//let prezzoDelCaffe = 2;
//let result = caffeDelGiorno * prezzoDelCaffe;
//alert(result);

//let etaUtente = prompt("Inserisci il tuo anno di nascita");
//let anno = 2023;
//let calcolo = anno - etaUtente;
//alert(calcolo);

//let temperaturaF = prompt("Quanti gradi fahreneit ci sono?");
//let temperaturaC = temperaturaF - 32;
//let result = (temperaturaC * 5) / 9;
//alert(result);

//let votoStudente1 = parseInt(prompt("Studente 1 dimmi il tuo voto"));
//let votoStudente2 = parseInt(prompt("Studente 2 dimmi il tuo voto"));
//let votoStudente3 = parseInt(prompt("Studente 3 dimmi il tuo voto"));

//let mediaStudente = votoStudente1 + votoStudente2 + votoStudente3;
//let result = mediaStudente / 3;
//alert(result);

//let contoEmancia = prompt('Dimmi il totale del conto e la precentuale della mancia')
//let valoreMancia =

//let eta = prompt("Quanti anni hai?") 
//if (eta <= 13) {
//    alert("Solo film con classificazione PG");
//} else if (eta > 13 && eta <= 17) {
//    alert("Classificazione PG e PG-13");
//} else {
//    alert("Puoi vedere tutti i film");
//}
   
let peso = Number(prompt('Quanto pesi (in kg)?'));
let altezza = Number(prompt ('Quanto sei alto (in m)?'));
let altezzamoltiplicata = altezza*2;
let bmi = peso / altezzamoltiplicata;
alert(bmi)
if (bmi <= 18.5) {
    alert("Sei sottopeso!");
} else if (bmi > 18.5 && bmi <= 24.9) {
    alert("Sei normopeso.");
} else (bmi >= 25); {
    alert("Sei sovrappeso!");
}