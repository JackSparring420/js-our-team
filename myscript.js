// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// Creo un array che contiene gli oggetti che mi vanno a costituire le card
let team = [
    {
        "immagine" : "img/wayne-barnett-founder-ceo.jpg",  // oggetto
        "nome" : "Wayne Barnett",
        "descrizione" : "Founder & CEO"
    },

    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Angela Caroll",
        "descrizione" : "chief editor" 
    },
    
    {
        "immagine" : "img/angela-lopez-social-media-manager.jpg",
        "nome" : "angela Lopez",
        "descrizione" :"Social Media Manager"
    },
    
    {
        "immagine" : "img/barbara-ramos-graphic-designer.jpg",
        "nome" : "Barbara Ramos",
        "descrizione" : "Graphic Designer"
    },
    
    {
        "immagine" : "img/scott-estrada-developer.jpg",
        "nome" : "Scott Estrada",
        "descrizione" : "Developter"
    },
    
    {
        "immagine" : "img/walter-gordon-office-manager.jpg",
        "nome" : "Walter Gordon",
        "descrizione" : "Office Manager"
    }
]
// creo una variante che va a prendere il percorso dove stampare tutte le carte
const teamContainer = document.querySelector(".team-container")

// stampo le carte
stampaCard();

// pusha un nuovo membro
let btn = document.getElementById("addMemberButton")
btn.addEventListener("click",
function () {
    // valori form
    var nameC = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var img = document.getElementById("image").value;
    
    // push ogetto all'array
    let teamCard = {
        "immagine" : img,
        "nome" : nameC,
        "descrizione" : role
    }
    team.push(teamCard);

    // ristampa tutte le carte nel html
    stampaCard();
});

// funzione per stampare le carte
function stampaCard() {
    // var per inserire il contenuro delle carte
    let teamCard =""
    // prendo tutti gli oggetti nell'array
    for(let i = 0; i < team.length; i++) {
        // inserisco gli ogg in una variabile per poter selezionare le propietà 
        var objTeam = team[i];
        console.log(objTeam.nome);
        // stampo testo html per il creare il contenuto delle carte nella var teamCard inserendo le propietà degli oggetti  
        teamCard += `
            <div class="team-card">
                <div class="card-image">
                    <img
                        src="${objTeam.immagine}"
                        alt="${objTeam.nome}"
                    />
                </div>
                <div class="card-text">
                    <h3>${objTeam.nome}</h3>
                    <p>${objTeam.descrizione}</p>
                </div>
            </div>`
    }

    // stampo nel html
    teamContainer.innerHTML = teamCard;
}