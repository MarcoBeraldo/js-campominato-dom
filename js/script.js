// ! Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
// perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: 
// se il numero è presente nella lista dei numeri generati (delle bombe) - 
// abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro 
// e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba 
// o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// ! MILESTONE 1
// Prepariamo "qualcosa" per tenere il punteggio dell'utente.
// Quando l'utente clicca su una cella, incrementiamo il punteggio.
// Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.


// ! MILESTONE 2
// Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
// Generiamoli e stampiamo in console per essere certi che siano corretti


// ! MILESTONE 3
// Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, 
// controllando se il numero di cella è presente nell'array di bombe. 
// Se si, la cella diventa rossa 
// (raccogliamo il punteggio e e scriviamo in console che la partita termina) 
// altrimenti diventa azzurra e dobbiamo incrementare il punteggio.


// ! MILESTONE 4
// Quando l'utente clicca su una cella, e questa non è una bomba, 
// dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo 
// perchè in quel caso la partita termina. 
// Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
// (Ma come stabiliamo quale sia il punteggio massimo?)


// ! MILESTONE 5
// Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba 
// o se perchè l'utente ha raggiunto il punteggio massimo. 
// Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato 
// in caso di vittoria o sconfitta.


// ! BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;







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

const getUniqueRandomNumber = (min, max, blacklist) => {
    let randomNumber;
    // genera un numero random finchè non è presente nell' array dei numeri già generati
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    } while (blacklist.includes(randomNumber));
    return randomNumber;
}


// *prendo gli elementi utili
let grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');
const retryButton = document.getElementById('retry-button');
const mainSection = document.getElementById('main')
let score = 0;
let bombs = [];



playButton.addEventListener('click', function () {


    // cambio il nome del bottone Gioca In Ricomincia
    this.innerText = 'Ricomincia!';
    // tolgo il contenuto della griglia per poi ricrearlo da capo a ogni pressione del bottone
    grid.innerHTML = '';
    // assegno un valore a rows e cells di default
    let rows = cells = 7
    // assegno una variabile al risultato della funzione che cambia la difficoltà
    let difficulty = selectDifficulty();
    // svuoto l'array delle bombe
    let bombs = [];



    // in base alla dificoltà selezionata cambio il valore di rows e cells
    if (difficulty === 'easy') {
        rows = 10;
        cells = 10;
    } else if (difficulty === 'normal') {
        rows = 9;
        cells = 9;
    }


    // genero 16 bombe con numeri casuali
    let totalCells = rows * cells
    for (let i = 0; i < 16; i++) {
        let bomb = getUniqueRandomNumber(1, totalCells, bombs);
        bombs.push(bomb)
    }
    console.log(bombs)
    // al click su ogni cella, la cella diventa azzurra e stampo in console il suo numero
    for (let i = 1; i <= totalCells; i++) {
        // creo una nuova cella
        const cell = createCell();
        // la appendo alla griglia
        grid.appendChild(cell);
        // per ogni casella creata inserisco il suo numero in ordine
        cell.innerText = i;

        cell.addEventListener('click', (event) => {
            //! se la cella è già stata cliccata, ferma
            if (cell.classList.contains('clicked')) return
            // stampo il numero della cella in console
            console.log(i);
            // aggiungo la classe clicked alla cella cliccata
            let message = '';
            if (bombs.includes(i)) {
                event.target.classList.add('bomb');
                message = 'GAME OVER. Hai perso.'
                console.log(message);


            } else {
                event.target.classList.add('clicked');
                // tengo il punteggio dell'utente
                score = score + 1;
                console.log(score)
            }
        });
    };


});