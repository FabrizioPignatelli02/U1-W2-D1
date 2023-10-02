/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* I principali datatype in JavaScript sono:
-String: con String intendiamo un dato di tipo testuale; 
viene contrassegnato con gli apici, singoli o doppi, dove ll'interno possiamo scrivere tutto ciò che vogliamo. 
JavaScript lo interpreterà come del semplice testo. 
*/ let variabileStringa = "Ciao a tutti!";
console.log("Variabile String: ",variabileStringa);
/*La variabile string si può concatenare (unire) con altre stringhe per creare delle frasi, questo grazie all'operatore "+".*/
let variabileStringaConcatenata = variabileStringa + " " + "Come va?";
console.log("Variabile concatenata: ",variabileStringaConcatenata);

/*-Number: si intende i numeri, interi e non solo. Non servono apici per inserire il numero, ma ci basterà scriverlo di seguito al segno dell'uguale.*/
let variabileNumero = 10;
console.log("Variabile Numero: ",variabileNumero);
/*Con gli operatori "+""-""*""/" possiamo fare delle vere e proprie operazioni con i numeri.*/
let variabileSomma = variabileNumero + 10;
let variabileDifferenza = variabileNumero - 10;
let variabileMoltiplicazione = variabileNumero * 10;
let variabileDivisione = variabileNumero / 10;
console.log("Variabile Somma: ",variabileSomma);
console.log("Variabile Differenza: ",variabileDifferenza);
console.log("Variabile Moltiplicazione: ",variabileMoltiplicazione);
console.log("Variabile Divisione: ",variabileDivisione);

/*-Boolean: si intende un tipo di dato che in outup, uscita, potrà solamente che darci due valori:
-TRUE: vero
-FALSE: falso*/

let variabileBoolean = true;
console.log("Variabile Boolean: ", variabileBoolean);

/*-Null: un tipo di dato che in output non ci darà nulla. Viene identificato null quando "intenzionalmente" non si assegna nessun valore ad una variabile.*/
let variabileNull = null;
console.log("Variabile Null: ",variabileNull);

/*

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Fabrizio";
console.log("Esercizio 2 - Name: ",name);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addizione = 10 + 12;
console.log("Esercizio 3 - Addizione: ", addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;
console.log("Esercizio 4: ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Pignatelli";
console.log("Esercizio 5 - cambio valore alla variabile name: ",name);

const città = "Viterbo";
console.log("Esercizio 5 - variabile const: ",città);
// città = "Roma";
// console.log("Esercizio 5 - dimostrazione const invariabile: ", città);
//Per dimostrare l'invariabilità levare il commento dalle precedenti righe di codice per mostrare un errore sulla console del vostro browser//


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4;
console.log("Esercizio 6 - sottrazione: ",sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

// name1 = name1.toLowerCase();
// name2 = name2.toLocaleLowerCase();
//Trasformando entrambe in lower case, la condizione di uguglianza si trasforma in TRUE, mentre la condizione di differenza si trasforma in FALSE
//Per provare levare il commento dalle due righe di codice sopra


//Per dimostare che entrambe sono diverse utilizziamo gli operatori logici//
console.log("Esercizio 7 - Sono Uguali? : ",name1 === name2);
//La console ci restituisce "FALSE" proprio perchè con l'operatore logico "===" ci permette di fare un controllo del dato e del tipo di dato stesso.
//In questo caso trova un'incongruenza con le lettere iniziali, con la "j" che è diversa dalla "J", quindi ci restituisce FALSE.
console.log("Esercizio 7 - Sono Diversi? : ",name1 !== name2);
//In questo caso la console restituisce "TRUE" perchè con l'operatore logico "!==" ci permette di fare un controllo per vedere se sono diversi i due dati, nel contenuto e nel tipo.
//Essendo diversi, ci conferma che lo sono restituendo TRUE



