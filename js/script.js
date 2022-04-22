/*

L’utente indica un livelloSfida di difficoltà in base al quale viene generata una griglia di gioco quadrata.
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

1. Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
2. Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

*/

// Variabili universali
const container = document.querySelector(".container");
const TOTAL_BOMBS = 16;
let livelloSfida;


// Logica
document.querySelector('#livello').addEventListener("change", assegnaLv);
document.querySelector("#btn").addEventListener("click", inizia);


// Funzioni
function inizia(){

    pulisci();
    assegnaLv();
    // creaFinestraRisultati();

    for(let i = 1; i <= livelloSfida; i++){
        const box = creaCelle(container);
        box.append(i);

        box.addEventListener('click', amministraCelleCliccate);
    }

}
    
    function pulisci(){
        container.innerHTML = "";
    }
    
    function assegnaLv(){
        livelloSfida = livello.options[livello.selectedIndex].value;
    }

    // function creaFinestraRisultati(){
    //     const risultati = document.querySelector("resoults");
    //     const window = document.createElement("div");

    //     window.classList.add("window");
    //     risultati.append(window);

    // }

    function creaCelle (doveCreare){
        const box = document.createElement("div");
        box.classList.add("box", "center", "box"+livelloSfida);
        doveCreare.append(box);
        return box;
    }

    function amministraCelleCliccate(){
        this.classList.add('active');
    }

    
