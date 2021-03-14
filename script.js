var datum = document.getElementById('datum');
var tijd = document.getElementById('tijd');
var dagfase = document.querySelector('.dagfase')

//  dag / maand 
var datumVanVandaag = new Date();
var d = plus0(datumVanVandaag.getDate())

datum.innerHTML = d + '/' + (datumVanVandaag.getMonth()+1) + '/' + datumVanVandaag.getFullYear();

// tijd --> uren / minuten
// zet bij minuten een nul ervoor als het onder de 10 is
function plus0(zero) {
    if (zero < 10) {
      zero = "0" + zero;
    }
    return zero;
}

var uur = new Date();
var m = plus0(uur.getMinutes())
tijd.innerHTML = uur.getHours() +  ':' + m;


var ochtendTijd = new Date();
ochtendTijd.setHours(06,00,0);

var middagTijd = new Date();
middagTijd.setHours(12,00,0);

var avondTijd = new Date();
avondTijd.setHours(18,00,0);

var nachtTijd = new Date();
nachtTijd.setHours(00,00,0)


if (uur >= avondTijd) {
    tekst.innerHTML = 'Het is avond 🌝';
    dagfase.classList.add("avond")
} else if (uur >= ochtendTijd && uur < middagTijd) {
    tekst.innerHTML = 'Het is ochtend ☕️';
    dagfase.classList.add("ochtend")
} else if (uur >= middagTijd ) {
    tekst.innerHTML = 'Het is middag 🍃';
    dagfase.classList.add("middag")
} else if (uur >= nachtTijd) {
    tekst.innerHTML = 'Het is nacht 🌚';
    dagfase.classList.add("nacht")
}

