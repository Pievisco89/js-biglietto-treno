var km_totali = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var prezzo = km_totali * 0.21;
var prezzo_finale;

if(eta < 18){
  var sconto_20 = (prezzo * 20) / 100;
  var prezzo_under18 = prezzo - sconto_20;
  var prezzo_finale = prezzo_under18;
}else if (eta > 65){
  var sconto_40 = (prezzo * 40) / 100;
  var prezzo_over65 = prezzo - sconto_40;
  var prezzo_finale = prezzo_over65;
}else{
  var prezzo_finale = prezzo;
}

document.getElementById('messaggio').innerHTML = "Il prezzo del tuo biglietto è " + prezzo_finale.toFixed(2) + "€";