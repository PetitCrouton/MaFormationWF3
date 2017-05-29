/* -------------------------- LE DOM--------------------------------
Le Dom est une interface de développement en JS pour HTML.
Grâce au DOM, je vais être en mesure d'accéder / modifier mon HTML.

L'objet "document": c'est le point d'entrée vers mon contenu HTML!

Chauqe page chargée dans mon navigateur a un objet "document"
-------------------------------------------------------------------*/

//Comment récupérer les différentes informations de ma page HTML (class, id etc.)?

/*-----document.getElementById----------------
fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : id
*/
var bonjour = document.getElementById("bonjour");
console.log(bonjour);

/*-----document.getElementByClassName----------------
fonction qui va permettre de récupérer un ou plusieurs élément(s) HTML à partir de son identifiant : class
ATTENTION : renvoit sous forme de tableau JS, autrement dit, une collection d'éléments HTML (même s'il n'y a qu'un seul élément)
*/
var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

/*-----document.getElementByTagName----------------
fonction qui va permettre de récupérer un ou plusieurs élément(s) HTML (liste) à partir de la balise
*/
var span = document.getElementsByTagName("span");
console.log(span);