
//SNACK N1

//  array di oggetti 
// let zucchine = [
//     { varieta: "Zucchina ", peso: 200, lunghezza: 15 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 12 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 17 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 20 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 14 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 16 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 19 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 22 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 18 },
//     { varieta: "Zucchina ", peso: 200, lunghezza: 21 }
// ];


// function calcolaPesoTotale() {
//     let pesoTotale = 0;
//     for (let i = 0; i < zucchine.length; i++) {
//         pesoTotale += zucchine[i].peso;
//     }
//     return pesoTotale;
// }

// // Calcoliamo il peso totale delle zucchine
// let pesoTotaleZucchine = calcolaPesoTotale();
// console.log("Il peso totale è: " + pesoTotaleZucchine + " grammi.");


//SNACK N2


// let zucchine = [
//     { varieta: "Zucchina 1 ", peso: 200, lunghezza: 16 },
//     { varieta: "Zucchina 2 ", peso: 200, lunghezza: 12 },
//     { varieta: "Zucchina 3 ", peso: 200, lunghezza: 17 },
//     { varieta: "Zucchina 4 ", peso: 200, lunghezza: 10 },
//     { varieta: "Zucchina 5 ", peso: 200, lunghezza: 21 }
// ];

// let zucchineLunghe = [];
// let zucchineCorte = [];


// for (let i = 0; i < zucchine.length; i++) {
//     if (zucchine[i].lunghezza < 15) {
//         zucchineCorte.push(zucchine[i]);
//         console.log(zucchine[i].varieta +"corta");

//     }
//     else {
//         zucchineLunghe.push(zucchine[i]);
//         console.log(zucchine[i].varieta +"lunga");



//     }
// }

// function calcolaPesoTotale(zucchineArray) {
//     let pesoTotale = 0;
//     for (let i = 0; i < zucchineArray.length; i++) {
//         pesoTotale += zucchineArray[i].peso;
//     }
//     return pesoTotale;
// }

// let pesoTotaleZucchineCorte = calcolaPesoTotale(zucchineCorte);
// let pesoTotaleZucchineLunghe = calcolaPesoTotale(zucchineLunghe);

// console.log("Il peso totale delle zucchine corte è: ", pesoTotaleZucchineCorte, "grammi");
// console.log("Il peso totale delle zucchine lunghe è: ", pesoTotaleZucchineLunghe, "grammi");

//SNACK N3


// function stringaGirata(stringa) {
//     // Converto la stringa in un array di caratteri utilizzando split.
//     //  inverto l'ordine degli elementi utilizzando reverse
//     //  unisco gli elementi in una stringa con join

//     return stringa.split('').reverse().join('');
// }

// let stringaOriginale = "Ciao";
// let parola = stringaGirata(stringaOriginale);
// console.log(stringaOriginale);
// console.log(parola);

// snack N4

function fusionArray(array1, array2) {
    let fusionato = [];
    for (let i = 0; i < array1.length; i++) {
        
        fusionato.push(array1[i]);
       
        if (i < array2.length) {
            fusionato.push(array2[i]);
        }
    }
    return fusionato;
}

let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3];
let arrayFuso = fusionArray(array1, array2);
console.log(arrayFuso); 