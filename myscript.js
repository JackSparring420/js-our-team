// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// 1 Creo un array che contiene gli oggetti che mi vanno a costituire le card
// 2 Seleziono il div dove stampare le mie carte
// 3 

let team = [
    {
        "immagine" : "img/wayne-barnett-founder-ceo.jpg",
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

const teamContainer = document.querySelector(".team-container")

let teamCard =""
for(let i = 0; i < team.length; i++) {
    var objTeam = team[i];
    console.log(objTeam.nome);
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

// pusha un nuovo membro
let btn = document.getElementById("addMemberButton")
btn.addEventListener("click",
function () {
    var nameC = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var img = document.getElementById("image").value;
    
    let teamCard = {
        "immagine" : img.value,
        "nome" : nameC.value,
        "descrizione" : role.value
    }
        team.push(teamCard);
        
        console.log(nameC);
        console.log(role);
        console.log(img);

        // teamCard += `
        //     <div class="team-card">
        //         <div class="card-image">
        //             <img
        //              src="${objTeam.immagine}"
        //              alt="${objTeam.nome}"
        //             />
        //         </div>
        //         <div class="card-text">
        //             <h3>${objTeam.nome}</h3>
        //             <p>${objTeam.descrizione}</p>
        //         </div>
        //     </div>`
    }
    )

teamContainer.innerHTML = teamCard;