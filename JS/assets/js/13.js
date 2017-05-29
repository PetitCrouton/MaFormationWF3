/*Manipulation des contenus*/

function l(e){
    console.log(e);
}

// Je souhaite récupérer le lien, comment faire?
var google = document.getElementById("google");
l(google)

// Maintenant, je souhaite accéder aux informations de ce lien, par exemple:
    // A Lien vers lequel pointe la balise
    l("le lien vers lequel pointe la balise :")
    l(google.href);

     // B L'id de la balise
    l("l'id la balise :")
    l(google.id);

    // C La classe de la balise
    l("La classe de la balise :")
    l(google.className);

    // D Le texte de la balise (l'élément)
    l("Le texte de la balise :")
    l(google.textContent);

// Maintenant, je souahite modifier le contenu de mon lien
//comme une variable classique, je vais simplement affecter une nouvelle valeur
google.textContent
 = "Mon lien vers Google !";

// Ajouter un élément dans la page html via JS
//2 méthodes possibles

//1 la fonction document.createElement() va permettre de générer un nouvel 
//élément dans le DOM que je pourrais par la suite modifier avec les méthodes 
// que nous venons de voir.

//PS ce nouvel élément est palcé en mémoire

// Création élément span
var span = document.createElement("span");

//si je souhaite lui donner une id
span.id = "MonSpan";

//si je souhaite lui attribuer du contenu
span.textContent = "Mon Beau Texte en JS";

//2 La fonction appendChild() va me permettre de rajouter un enfant à l'élément DOM
google.appendChild(span);

/*----------EXERCICE----------------------------------------------------------------
En partant du travail déjà réalisé sur la page.
Créer directement dans la page une balise h1 ayant comme contenu:"Titre de mon article".
Dans cette balise, vous créez un lien vers une url de votre choix.
Bonus : ce lien sera de couleur rouge et non souligné
-----------------------------------------------------------------------------------*/
// Création de la baliseh1
var h1 = document.createElement("h1");

//creation de la balise a
var a = document.createElement("a");

//Je donne un titre à mon lien
a.textContent = "Titre de mon article";

//je veux donner un lien à mon lien
a.href = "#";

// appenChild()

//je mets mon lien a dans mon h1
h1.appendChild(a);

//je mets mon h1 dans ma page, dans mon body
document.body.appendChild(h1);

//bonus lien de couleur
a.style.color = "red";

//je veux que le lien ne soit pas souligné
a.style.textDecoration = "none";

//Ps regarder la correction de Hugo car mon h1 n'apparait pas comme un h1