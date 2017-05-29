/*-----------
Les Boucles
-----------*/

// La boucle for
// Pour i = 1; tant que i <= (strictement inférieur ou égal) 10; alors, j'incrémente
for(var i = 1 ; i <= 10 ; i++){
    document.write("<p>Instruction exécutée : <strong>" + i + "</strong></p>");
}
document.write("<hr>");

// La boucle while : tant que

var j = 1;
while(j <= 10){
    document.write("<p>Instruction exécutée : <strong>" + j + "</strong></p>"); 
    j++;
}

/*EXERCICE
grâce à une boucle for, afficher la liste des prénoms du tableau suivant dans la console ou sur votre page
*/
var Prenoms = ['Hugo', 'Jean','Matthieu', 'Luc', 'Pierre', 'Marc'];

for (var i = 1 ; i < 6; i++) {
   
    document.write("<p>Prenom : <strong>" + Prenoms[i] + "</strong></p>");
}

// CORRECTION 2 avec le length cf.doc Hugo
// même exercice avec boucle while cf. doc Hugo
