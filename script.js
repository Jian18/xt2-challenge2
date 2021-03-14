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

var currentTime = new Date();

var ochtendTijd = new Date();
ochtendTijd.setHours(06,00,0);

var middagTijd = new Date();
middagTijd.setHours(12,00,0);

var avondTijd = new Date();
avondTijd.setHours(18,00,0);

var nachtTijd = new Date();
nachtTijd.setHours(00,00,0)


if (currentTime >= avondTijd) {
    tekst.innerHTML = 'Het is avond 🌝';
    dagfase.classList.add("avond")
} else if (currentTime >= ochtendTijd && currentTime < middagTijd) {
    tekst.innerHTML = 'Het is ochtend ☕️';
    dagfase.classList.add("ochtend")
} else if (currentTime >= middagTijd ) {
    tekst.innerHTML = 'Het is middag 🍃';
    dagfase.classList.add("middag")
} else if (currentTime >= nachtTijd) {
    tekst.innerHTML = 'Het is nacht 🌚';
    dagfase.classList.add("nacht")
}

function tijdUpdate() {
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = plus0(currentTime.getMinutes());
    var s = plus0(currentTime.getSeconds());
    tijd.innerHTML = h + ":" + m + ':' + s;
    
    setTimeout(tijdUpdate, 500)
}

tijdUpdate()