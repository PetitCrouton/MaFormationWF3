/*-------------------
     LES FONCTIONS
 -------------------*/

 // Déclarer une fonction
 // Cette fonction ne retourne aucune valeur
 function DitBonjour(){
    // Lors de l'appel de la fonction, les instructions ci-dessous seront exécutées
    alert("Bonjour !")
 }

 //je vais appeler ma fonction "DitBonjour" et déclencher ses instructions
 DitBonjour();

 // Déclarer une fonction 
 function Bonjour(Prenom, Nom) {
     document.write("<p>Hello <strong> " + Prenom +" "+ Nom + "<strong> !</p>");
 }

 // Appeler / utiliser une fonction avec un paramètre
 Bonjour("Hugo","LIEGEARD");

 // OU

var MonPrenom  = "Yimin";
var MonNom     = "JI";

Bonjour(MonPrenom,MonNom);

/* EXERCICE
Créer une fonction permettant d'effectuer l'addition de deux nombres passés en paramètres
*/
function Add(){
    document.write(resultat = nb1 + nb2);
}

var nb1 = 4;
var nb2 = 2;
Add(nb1 + nb2);

//correction
function addition(nb1, nb2){
    let resultat = nb1 + nb2;
    return resultat;
}

document.write("<p>"+ resultat +"</p>")

 //ou
 
 function addition(nb1, nb2){
    //let resultat = nb1 + nb2;
    return nb1 + nb2;
}

document.write("<p>"+ addition(10, 5) +"</p>")
