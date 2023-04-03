/* [À compléter : étape 5b] */
/*******************************************************************************
Faire basculer la possibilité de défiler dans la page
*******************************************************************************/
/* Explication détaillée : selon l'état de la case à cocher associée avec le menu
adaptatif (à savoir, cochée ou décochée), on veut bloquer ou débloquer la 
possibilité de défiler la page. Ceci est important car si le menu adaptatif est 
affiché, on ne veut pas que l'utilisateur puisse défiler la page, mais lorsque 
le menu n'est pas affiché, on veut évidement permettre le défilement de la page 
à nouveau. */
//On récupère l'élément input ciblé dans <body>
let leCheckBox = document.querySelector('.barre-nav>#cc-nav-principale');
//On récupère l'élément body
let leBody = document.querySelector('body');

//On associe la fonction à l'élément input
checkBox = document.addEventListener("click", gererLeDefilement);

//Fonction qui bloque/réinitialise le déroulement vertical
function gererLeDefilement(event){
    if(leCheckBox.checked){
        leBody.style.overflowY= "hidden";        
    }
    else{
        leBody.style.overflowY = "scroll";
    }
}



/* [À compléter : étape 5c] */
/*******************************************************************************
Fermer le menu adaptatif lorsque un bouton est cliqué
*******************************************************************************/
/* Explication détaillée : lorsqu'un des liens (ou 'boutons') dans le menu 
adaptatif est cliqué, le menu adaptatif doit être "refermé" pour permettre à 
l'utilisateur de continuer à intéragir avec la page. */

//On récupère tous les boutons du menu (NodeList)
let boutonsMenu = document.querySelectorAll('.nav-principale > a');
    
// console.log("les boutons:", boutonsMenu);

//Boucle for...of... pour gerer la fermeture du menu une fois un bouton selectionné
for(let bouton of boutonsMenu){
    bouton.addEventListener("click", controlerEtatBoutonBurger);
}

//Fonction qui gère la barre de défilement sur le body si la case est cochée ou non
function controlerEtatBoutonBurger(){
    //Ferme le menu quand on appuie sur un des boutons du menu (balises <a>)
    leCheckBox.checked = false;

    if(leCheckBox.checked == false){
       leBody.style.overflowY = "scroll"; 
    }
}

