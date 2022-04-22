/*

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

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

Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

*/

// Variabili universali
const container = document.querySelector(".container");
const BOMBE_MASSIME = 16;
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

        // console.log(generaListaBombe(1, BOMBE_MASSIME));

        function generaListaBombe(min, max){
            let bomba;
            let listaBombe = [];
        
            while(listaBombe.length<BOMBE_MASSIME){
                bomba = generaNumeroCasuale(min, max);
                if(!listaBombe.includes(bomba)){
                    listaBombe.push(bomba);
                }
            }

            return bomba;
        }
        
            function generaNumeroCasuale(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }