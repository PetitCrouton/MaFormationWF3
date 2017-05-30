/*-------------------------- Les evenements---------------------------------------

Les evenements vont me permettre de déclencher une fonction, c'est à dire,
une série d'instructions, suite à une action de l'utilisateur.

OBJECTIF : Etre en mesure de capture ces evenements, afin d'exécuter une fonction.

Les evenements:

- MOUSE : 
    -click      : au clic sur un élément
    -mouseenter : au survol de la zone d'un élément
    -mouseleave : la souris sort de cette zone

- KEYBOARD :
    -keydown : lorsqu'une touche du clavier est enfoncée
    -keyup   : une touche a été relâchée

- WINDOW :
    -scroll : défilement de la fenêtre
    -resize : redimensionnement de la fenêtre

- FORM (eval!!!!!)
    -change : pour les éléments <input>, <select> et <textarea>
    -submit : à l'envoi d'un formulaire

- DOCUMENT :
    - DOMContentLoaded : exécuté lorsque le document HTML est complètement chargé, sans
    attendre le css et les images

------------------------------------------------------------------------------------*/

/*-------------------------- Les écouteurs d'evenements---------------------------------------

Pour attacher un evenement à un element ou, autrement dit, pour déclarer un écouter d'evenement
qui se chargera de lncer une action, càd une fonction pour un evenement donné,
je vais utiliser la syntaxe suivante:
------------------------------------------------------------------------------------*/

var p = document.getElementById("MonParagraphe");
console.log(p);

// Je souhaite que mon paragraphe soit rouge au clic de la souris

    //je définis une fonctionchargée d'exécuter cette action
    function changeColorToRed(){
        p.style.color = "red";
    }

    // Je déclare un écouteur qui se chargera d'appeler la fonction
    //au déclenchement de l'évenement
    p.addEventListener("click" , changeColorToRed);

/*--------------------------EXERCICE-----------------------------------------------------
a l'aide de JS, créer un champ "input" type text avec un ID unique.
Afficher ensuite, dans une alerte, la saisie de l'utilisateur. 
-----------------------------------------------------------------------------------------*/

// je créé le champ input
var input = document.createElement("input");

//Attribution d'un attribut
input.setAttribute("type", "text");
input.setAttribute("placeholder", "saisir contenu");

//je donne une id à input
input.id = "MonInput";

//je vérifie dans ma console
console.log(input);

//j'affiche mon input dans le body
document.body.appendChild(input); // put it into the DOM

//création d'un écouter
input.addEventListener("change" , AfficheInput);

//j'affiche dans une alerte la saisie de l'utilisateur
function AfficheInput(){    
    alert(input.value);
}


