
// - visualizzare in pagina 5 num casuali
let numAlert = giveRandomNumberToArray(5);


// - far partire un timer di 30sec
let timerDOMElement = document.getElementById("timer")
let counter = 30  

let idInterval = setInterval(() => {
    counter--
    timerDOMElement.innerHTML = counter
     if (counter === 0){
        clearInterval(idInterval)
        givePromptToArray(5)
    }
}, 1000)


// - l'utente inserisce, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt
// let userChoice = givePromptToArray(5)

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

function givePromptToArray(max) {
    const arrayPrompt = []
    do {
        arrayPrompt.push(prompt("Inserisci i numeri"))
    } while (arrayPrompt.length < max); 
    console.log(arrayPrompt)
}