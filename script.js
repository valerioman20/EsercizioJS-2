const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

let prices = [34, 5, 2,]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco 

/* TOTALE CARRELLO CON SOMMA DEll'ARRAY */
let totaleCarrello = 0;
for (let i=0; i < prices.length; i++) {
  totaleCarrello += prices[i];
}
console.log(totaleCarrello);

/* SCONTO SE L'UTENTE E' ISAMBASSADOR O MENO */
if (utenteCheEffettuaLAcquisto.isAmbassador){
  let sconto = (totaleCarrello *30) /100
  totaleCarrello -= sconto
}  
console.log(totaleCarrello);

/* SE IL TOTALE CARRELLO SUPERA I 100 SPEDIZIONE GRATUITA */
if (totaleCarrello <= 100) {
  totaleCarrello += shippingCost
}
console.log(totaleCarrello);

/* CREO L'ARRAY DI UTENTI */
let utenti = [];
utenti.push (marco, paul, amy)
console.log(utenti);
for (let i=0; i < utenti.length; i++) {
  let frase = `${utenti[i].name} ${utenti[i].lastName}`
  if (!utenti[i].isAmbassador) {
    frase += " non è"
    } else frase += " è"
  frase += " un ambassador"
  console.log(frase);
}






