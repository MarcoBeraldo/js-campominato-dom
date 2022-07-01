// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Procediamo milestone per milestone senza invertire l'ordine.

// !MILESTONE 1

// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

// !MILESTONE 2

// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
// Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

// !MILESTONE 3

// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

// !MILESTONE 4

// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

// ! BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Note:
// - questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)      

// *FUNZIONI
const createCell = () => {
    const newCell = document.createElement('div');
    newCell.className = `cell-${cells}`
    return newCell;
};

const selectDifficulty = () => {
    let difficulty = document.getElementById("difficulty-select").value;
    console.log(difficulty)
    return difficulty;
}

// *prendo gli elementi utili
let grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');
const retryButton = document.getElementById('retry-button');
const mainSection = document.getElementById('main')
let rows = cells = 10


// quando premo il bottone 'Gioca!' creo la griglia, 
// tolgo il bottone 'Gioca!'  
// mostro il bottone 'Ricomincia!'
// assegno un numero alle celle
playButton.addEventListener('click', function () {
    this.innerText = 'Ricomincia!';
    grid.innerHTML = '';

    let rows = cells = 10
    let difficulty = selectDifficulty();


    if (difficulty === 'easy') {
        rows = 7;
        cells = 7;
    } else if (difficulty === 'normal') {
        rows = 9;
        cells = 9;
    }


    let totalCells = rows * cells
    for (let i = 1; i <= totalCells; i++) {
        // creo una nuova cella
        const newCell = createCell();
        // la appendo alla griglia
        grid.appendChild(newCell);
        // per ogni casella creata inserisco il suo numero in ordine
        newCell.innerText = i;
        // al click su ogni cella, la cella diventa azzurra e stampo in console il suo numero
        newCell.addEventListener('click', (event) => {
            console.log(i);
            event.target.classList.toggle('clicked');
        });
    };


});