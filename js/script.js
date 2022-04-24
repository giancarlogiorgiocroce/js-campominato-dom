/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
*/

// Variabili universali
const container = document.querySelector(".container");
let block = document.querySelector(".block")

let punteggio = document.querySelector("main div h1");

let contatorePunteggio = 0;
const BOMBE_MASSIME = 16;
let bombe;
let livelloSfida;

// Logica
document.querySelector('#livello').addEventListener("change", assegnaLv);
document.querySelector("#btn").addEventListener("click", inizia);


// Funzioni
function inizia(){
    let box;
    let arrayVittoria = [];
    
    pulisci();
    assegnaLv();
    mostraFinestraRisultati();
    
    
    bombe = generaListaBombe(1, livelloSfida);
    console.log(bombe);
    
    for(let i = 1; i <= livelloSfida; i++){
        box = creaCelle(container);
        box.append(i);
        arrayVittoria.push(box);
        

            if(bombe.includes(i)){
                box.classList.add("bomb");
            }

        box.addEventListener('click', amministraCelleCliccate);
    }
    
}

function pulisci(){
    container.innerHTML = "";
    contatorePunteggio = 0;
    punteggio.innerHTML = contatorePunteggio;
    document.getElementById("endgame").innerHTML = "";
    block.classList.add("invisible");
}

function assegnaLv(){
    livelloSfida = livello.options[livello.selectedIndex].value;
}

function mostraFinestraRisultati(){
    const risultati = document.querySelector(".results");
    risultati.classList.remove("invisible");
}


/*
    GENERA TUTTO QUELLO CHE è NEL CONTAINER
*/
function creaCelle (doveCreare){
    const box = document.createElement("div");
    box.classList.add("box", "center", "box"+livelloSfida);

    doveCreare.append(box);
    return box;
}

function amministraCelleCliccate(){
    
    if(this.classList.contains("bomb")){
        this.classList.add('active');
        document.getElementById("endgame").innerHTML = `Hai totalizzato ${contatorePunteggio} punti totali!`
        punteggio.innerHTML = contatorePunteggio;
        block.classList.remove("invisible");

    }else if(this.classList.contains("active")){
        alert("Non puoi premere due volte lo stesso campo!")

    } else if(!this.classList.contains("active")){
        this.classList.add('active');
        contatorePunteggio++;
        punteggio.innerHTML = contatorePunteggio;
    }

};

    // GENERATORE RANDOMICO DI BOMBE
function generaListaBombe(min, max){
    let listaBombe = [];

    while(listaBombe.length<BOMBE_MASSIME){
        bombe = generaNumeroCasuale(min, max);
        if(!listaBombe.includes(bombe)){
            listaBombe.push(bombe);
        }
    }
    return listaBombe;
}

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
    /GENERA TUTTO QUELLO CHE è NEL CONTAINER
*/