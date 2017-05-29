// -- Déclarer un Tableau Numérique, 2 manières possibles:
var monTableau = [];
var myArray    = new Array;

// -- Affecter des Valeurs à un Tableau Numérique
monTableau[0] = "Hugo";
monTableau[1] = "Tanguy";
monTableau[2] = "Géraldine";

// -- Afficher le contenu de mon Tableau Numérique dans la console
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[2]); // -- Géraldine
console.log(monTableau); // Affiche toutes les données du tableau

// -- Déclarer et affecter des valeurs à un tableau numérique
var NosPrenoms = ["Yimin" , "Alex" , "Cristian" , "tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et affecter des Valeurs à un Objet (pas de Tableau Associatif en JS)
// --Rq: l'objet ne donne pas la length
var Coordonnee = {
    "prenom" : "Hugo",
    "nom"    : "Liegeard",
    "age"    : "27"
}
console.log(Coordonnee);
console.log(typeof Coordonnee);

//--Comment créer et affecter des Valeurs à un Tableau à 2 Dimensions
// --Rq: là on voit la manière qui permet de comprendre, on verra par la suite la manière efficace

//--Je créé 2 tableaux numériqsues
var listeDePrenoms = ["Hugo","Rodrigue","Kristie"];
var listeDeNoms    = ["LIEGEARD","NOUEL","SOUKAI"];

//-- Je créé un tableau à 2 dimensions
var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher un Nom et un Prénom sur ma page HTML!
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

/*--EXERCICE
Créer un tableau à 2 dimensions appelé AnnuaireDesStagiaires qui contiendra toutes les coordonnées 
pour chaque stagiaire
Ex. nom prenom tel
*/
/*var listePrenoms = ["Pierre","Paul","Jacques","Calixte","Thibaud"];
var listeNoms    = ["TRUC","MUCH","MACHIN","NOVA","NOVA"];
var listeTel     = ["06","81","51","76","78"]

var AnnuaireDesStagiaires = [listePrenoms, listeNoms, listeTel];
console.log(AnnuaireDesStagiaires);
document.write(AnnuaireDesStagiaires[0][3]);
document.write(" ");
document.write(AnnuaireDesStagiaires[1][3]);
document.write(AnnuaireDesStagiaires[2][3]);
*/ 
 //CORRECTION
var AnnuaireDesStagiaires = [
    {"prenom":"Hugo" , "nom":"LIEGEARD" , "numero":"00 83 97 15 15"},
    {"prenom":"Calixte" , "nom":"GABAS-NOVA" , "numero":"00 83 97 15 15"},
    {"prenom":"Thibaud" , "nom":"NOVA" , "numero":"00 83 97 15 15"},
];
console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].nom); //LIEGEARD
console.log(AnnuaireDesStagiaires[1].nom); //GABAS-NOVA

// -- Exemple pour la 3D à télécharger sur Apolearn

/*******AJOUET UN ELEMENT DANS MON TABLEAU************ */
var Couleurs = ["Rouge","Jaune","Vert"];

/*Si je souhaite ajouter un élément dans mon tableau,
j'utilise la fonction push() qui me renvoit le nombre d'éléments de mon tableau*/

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// La fonction push() fait 2 choses, elle ajoute un élément et elle renvoit le nouveau
// nombre d'éléments dans le tableau
//--NB LA fontion unshift() permet d'ajouter un ou plusieurs éléments en DEBUT de tableau


/*-----------------
RECUPERER ET SRTIR LE DERNIER ELEMENT
La fonction pop() me permet de supprimer le dernier element de mon tableau et d'en 
récupérer la valeur.
Je peux accessoirement recuperer cette valeur dans une variable
 */
var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// La même chose est possible en utilisant la fonction shift();
// NB la fonction splice() permet de faire sortir un ou plusieurs elements du tableau

var monPremierElement = Couleurs.shift();
console.log(monPremierElement);
console.log(Couleurs);









