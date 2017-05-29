/*
//############## 09 LES BOUCLES ###################//
// Afficher les nombres de 1 à 10 avec une boucle while  
var j = 1;
while(j<=10){
    document.write("<p>Avec la boucle while " + j + " , on obtient cela!");
    j++;
}
document.write("<hr>");
// Afficher les nombres de 1 à 10 avec une liste for
for(var i = 1; i<=10; i++){
document.write("<p>Avec la boucle for " + i + " , on obtient cela !</p>");
}
document.write("<hr>");

// afficher les prénoms du tableau suivant : Jean, Matthieu, Luc, Pierre, Marc
var Prenom = ['Jean' , 'Matthieu' , 'Luc' , 'Pierre' , 'Marc'];
var LongueurTableau = Prenom.length;
for(var i = 0 ; i < LongueurTableau ; i++){
    document.write("<p>Affichage tableau "+ Prenom[i] +" !</p>")
}
document.write("<hr>");
// afficher les prénoms du tableau suivant : Jean, Matthieu, Luc, Pierre, Marc 
//avec la fonction foreach
Prenom.forEach(affichePrenoms);
function affichePrenoms(prenom,indice){
    console.log(prenom)
}
*/
//############## 08 LES CONDITIONS ###################//
/*EXERCICE
Creer une fonction permettant de verifier l'age d'un visiteur (prompt).
Si il a  la majorité légale, alors je lui souhaite la bienvenue.
Sinon, je fais une redirection sur google après lui avoir signalé le soucis
*/
/*
var majoriteLegale = 18; 
//Déclarer la fonction
function verification(){
//demander âge via un prompt
    var age = parseInt(prompt("Quel âge as-tu?","<Age>"));
    console.log(typeof age);

//Verifier majorité

    if(age > majoriteLegale){
        alert("Beinvenue sur mon site pourri!")
    }
    
//Sinon, redirection vers google
   else{
       alert("Dégage!")
        document.location.href="http://lmgtfy.com/?q=google"
   }
}
//Exécuter la fonction
verification();
*/
/*CORRECTION  à prendre sur le document envoyé par Hugo
où lui il fait le parseInt directemnt dans un return:
return parseInt(prompt("Bonjour, quel âge avez-vous? , <Saisissez votre âge>"));
et ensuite, la fonciton s'execute directement dans la condition:
if(verification() >= MajoriteLegaleFR){}
Redirection vers Google avec let me go ogle that for you

*/
/*
//déclarer la vartiable de majorité légale
var MajoriteLegale = 18;
// Declrer la fonction 
function verification(){
//demander age
return parseInt(prompt("Quel est ton âge?","<Age>"));
}
//verfier majorité
if(verification () > MajoriteLegale){
    alert("Bienvenue!")
}
    else{
        alert("Dégage!")
        document.location.href="http://google.fr"
    }
*/

/*EXERCICE
J'arrive sur espace sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon mail et mon mot de passe afin d'être authentifié sur le site
en cas d'echaec, une alerte m'informe du probleme
sinon messgae d e bienvenue
*/

//base de données

var email, mdp;

email = "g.gabas@gmail.com";
mdp = "wf3";
/*
//Demander adresse mail via un prompt
    var logMail = prompt("Quelle est ton adresse mail","<email>");

    if(logMail===email){
        var logPw = prompt("Quel est ton mdp?","<mdp>");
        if(logPw===mdp){
            alert("Bienvenue!");
        }else{
            alert("Erreur mdp");
        }
    }else{
        alert("Erreur mail");
    }
*/
//Meme exercice avec une fonction
/*
function authentification(){
    //Demander identifiants
    var logMail = prompt("Quel est ton mail?");
    var logPw   = prompt("Quel est ton mot de passe?");
    //Vérifier les identifiants
    if(logMail==email , logPw==mdp){
        alert("Beinvenue!")
    }else{
        if(logMail!=email){alert("Erreur mail");}
        if(logPw!=mdp){alert("Erreur mdp");}
    }
}
authentification();
*/
//MEME EXERCICE AVEC UNE AUTRE FONCTION
/*
var user = prompt("Quel est ton mail?");
var motdepasse   = prompt("Quel est ton mot de passe?"); 

function UtilisateurCorrect(){
    if(user==email && motdepasse==mdp){
        alert("Bienvenue");
    }else{alert("Dégage!")}
    
}
 UtilisateurCorrect();
*/
/*
//Meme exo avec une fonction true false
function MonUtilisateurEstCorrect(user,password){
    if(user == email && password == mdp){
        return true;
    }else{
        return false;
    }
}
var emailLogin = prompt("Quel est ton mail?");
var mdpLogin = prompt("Quel est ton mdp?");

if(MonUtilisateurEstCorrect(emailLogin , mdpLogin)){
    alert("Bienvenue");
} else { 
    alert("Dégage");
}
*/
/*
Réaliser une fonction permettant à un internaute de : 
-Saisir son nom dans un Prompt
-Retourner à l'utilisateur : Bonjour [PRENOM], quel âge as-tu?
-Saisir son âge
-retourner à l'utilisateur : Tu es donc né en  [ANNEE DE NAISSANCE]
-Afficher ensuite un récapitulatif de la page
Bonjour [PRENOM], tu as [AGE]!
*/
/*
//créer une varable date
var anneeActuelle = new Date();
//déclarer la fonction
function accueil(){
    //demander prénom
    var prenom = prompt("Quel est ton prénom?");
    //salutation personnalisée et demande âge
    var age = prompt("Bonjour " + prenom + ", Quel est ton âge?")
    //retour année de naissance
    alert ("Fantastic! tu es donc né(e) en " +(anneeActuelle.getFullYear()-age)+" !")
    document.write("Bonjour "+prenom+", tu as "+age+" ans et tu es né en "+(anneeActuelle.getFullYear()-age)+" !")

}
//exécuter la fonction
accueil();
*/

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */
/*
function addition(nb1, nb2) {
    // let resultat = nb1 + nb2;
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "</p>");
*/

//EXERCICE POUR LUNDI MATIN

var PremierTrimestre = [
    ["Hugo","LIEGEARD",[4,8,18,10]],
    ["Karim","IHADADENE",[8,18.5,18,13,10]],
    ["Rudy","HERICOURT",[10.5,11,4,9]],
    ["Marina","GABAS",[18,18,18,18]],
    ["Calixte","NOVA",[10.5,11,4,9]],
]
document.write
("Au Premier trimeste, l'étudiant " + PremierTrimestre[0][0] +" "+ PremierTrimestre[0][1] +
" a reçu les notes suivantes :<br> Français : " + PremierTrimestre[0][2][0] + 
"<br> Maths : "+PremierTrimestre[0][2][1]+"<br> Physique : "+PremierTrimestre[0][2][2]+"<br> Moyenne Générale : "+PremierTrimestre[0][2][3]+"<hr>");

document.write
("Au Premier trimeste, l'étudiant " + PremierTrimestre[1][0] +" "+ PremierTrimestre[1][1] +
" a reçu les notes suivantes :<br> Français : " + PremierTrimestre[1][2][0] + 
"<br> Maths : "+PremierTrimestre[1][2][1]+"<br> Physique : "+PremierTrimestre[1][2][2]+"<br> Anglais : "+PremierTrimestre[1][2][3]+"<br> Moyenne Générale : "+PremierTrimestre[1][2][4]+"<hr>");

document.write
("Au Premier trimeste, l'étudiant " + PremierTrimestre[2][0] +" "+ PremierTrimestre[2][1] +
" a reçu les notes suivantes :<br> Français : " + PremierTrimestre[2][2][0] + 
"<br> Maths : "+PremierTrimestre[2][2][1]+"<br> Physique : "+PremierTrimestre[2][2][2]+"<br> Moyenne Générale : "+PremierTrimestre[2][2][3]+"<hr>");

document.write
("Au Premier trimeste, l'étudiante " + PremierTrimestre[3][0] +" "+ PremierTrimestre[3][1] +
" a reçu les notes suivantes :<br> Français : " + PremierTrimestre[3][2][0] + 
"<br> Maths : "+PremierTrimestre[3][2][1]+"<br> Physique : "+PremierTrimestre[3][2][2]+"<br> Moyenne Générale : "+PremierTrimestre[3][2][3]+"<hr>");

document.write
("Au Premier trimeste, l'étudiant " + PremierTrimestre[4][0] +" "+ PremierTrimestre[4][1] +
" a reçu les notes suivantes :<br> Français : " + PremierTrimestre[4][2][0] + 
"<br> Maths : "+PremierTrimestre[4][2][1]+"<br> Physique : "+PremierTrimestre[4][2][2]+"<br> Moyenne Générale : "+PremierTrimestre[4][2][3]+"<hr>");




