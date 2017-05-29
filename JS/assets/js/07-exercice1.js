/*
Réaliser une fonction permettant à un internaute de : 
-Saisir son nom dans un Prompt
-Retourner à l'utilisateur : Bonjour [PRENOM], quel âge as-tu?
-Saisir son âge
-retourner à l'utilisateur : Tu es donc né en  [ANNEE DE NAISSANCE]
-Afficher ensuite un récapitulatif de la page
Bonjour [PRENOM], tu as [AGE]!
*/

//function pouic(){
    nomInternaute = prompt ('Entrez votre prénom');
    alert(nomInternaute);

    bonjourAge = prompt ('Bonjour '+  nomInternaute + ' quel âge as-tu?');
    alert(bonjourAge);
    
    anneeNaissance = 2017 - 34;

//}
//pouic(nomInternaute, bonjourAge);

document.write("<p> Bonjour " + nomInternaute + ", tu as " + bonjourAge + "</p>")

//CORRECTION

// 1 initialisation des variables
var anneeActuelle = new Date();
// 2 création de ma fonction
function Hello(){
    // 2a. je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What's your name?","<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b. je lui demande son age
    let age = parseInt(prompt("Hello "+ prenom + " ! How old are you?","<Saisir votre âge>"));
    console.log(age);
    console.log(typeof age);

    // 2c. j'affiche une alerte avec son année de naissance
    alert ("AMAZING! So you were born in "+(anneeActuelle.getFullYear()-age) + " !");
    // 2d. affichage du résumé dans la page HTML
    document.write("Hello "+prenom+" it's amazing! you are "+age+" years old !");
}
// 3 Execution de ma fonction
Hello();