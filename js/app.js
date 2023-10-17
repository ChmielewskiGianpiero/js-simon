
// - visualizzare in pagina 5 num casuali
let numAlert = giveRandomNumberToArray(5);
console.log(numAlert)


// - far partire un timer di 30sec
let timerDOMElement = document.getElementById("timer")
let counter = 30  

let idInterval = setInterval(() => {
    counter--
    timerDOMElement.innerHTML = counter
     if (counter === 0){
         clearInterval(idInterval)
    }
}, 1000)
console.log(idInterval) 


// - Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt

// - il software dice quanti e quali dei numeri da indovinare sono stati individuati.


function randomNumberGenerator() {
    const n = Math.floor(Math.random() * 100)
    return n
}

function giveRandomNumberToArray(max) {
    const arrayNum = []
    do {
        arrayNum.push(randomNumberGenerator())
        alert(randomNumberGenerator())
    } while (arrayNum.length < max); 
    console.log(arrayNum)
}