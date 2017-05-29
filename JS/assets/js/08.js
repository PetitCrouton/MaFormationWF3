/*
LES CONDITIONS
*/

varMajoriteLegaleFR = 18;

if(16 > varMajoriteLegaleFR) {
    alert("Bienvenue !");
}
else{
    alert("Google...")
}

/*EXERCICE
Creer une fonction permettant de verifier l'age d'un visiteur (prompt).
Si il a  la majorité légale, alors je lui souhaite la bienvenue.
Sinon, je fais une redirection sur google après lui avoir signalé le soucis
*/

//Déclarer les variables
varMajoriteLegaleFR = 18;

//créer la fonction
function verification(){
    //Demander l'age du visiteur dans un prompt
    let age = parseInt(prompt("Hello ! , how old are you?","<Type your age>"));
    console.log(age);
    console.log(typeof age);

    //vérifier si majorité legale
    varMajoriteLegaleFR = 18;

    //si oui, bienvenue
      if(age > varMajoriteLegaleFR) {
    alert("Bienvenue !");
}
    //sinon alerte et redirection vers Google
    else{
        alert("SORRY, you're not old enought to visit us !")
        document.location.href="http://lmgtfy.com/?q=google"
    }
}
//Execution de la fonction
verification();

// Let me google that for you! lmgtfy pour afficher une video 

/*CORRECTION  à prendre sur le document envoyé par Hugo
où lui il fait le parseInt directemnt dans un return:
return parseInt(prompt("Bonjour, quel âge avez-vous? , <Saisissez votre âge>"));
et ensuite, la fonciton s'execute directement dans la condition:
if(verification() >= MajoriteLegaleFR){}
Redirection vers Google avec let me go ogle that for you

*/

/*#####################################
    LES OPERATEURS DE COMPARAISON
#######################################
"=="  egal à, permet de vérifier que 2 variables sont identiques
"===" strictement égal à, compare la valeur et le type de données
"!="  différent
"!==" strictement different
*/

/*EXERCICE
J'arrive sur espace sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon mail et mon mot de passe afin d'être authentifié sur le site
en cas d'echaec, une alerte m'informe du probleme
sinon messgae d e bienvenue
*/

//base de données

var email, mdp;

email = "wf2@h1-media.fr";
mdp = "wf3";

//créer la fonction authentification
function authentification(){

    //je demande l'adresse mail et le mdp 
    var mail = prompt("Quelle est votre adresse mail?","<saisir votre mail>");
    var password = prompt("Quel est votre mot de passe? ","<Saisir votre mot de passe>");
  
    //verification mail et mdp
    if (mail==email, password==mdp){ 
          alert("Bienvenue !");
    }
   
    //si erreur mail
    else{
        if(mail!=email){alert("erreur mail");}
        if(password!=mdp){alert("erreur mot de passe");}
        
    }
  

}

//Execution de la fonction
authentification();
//coup de pouce de Hugo
//  Demander al'utilisateur son email
// demander son mdp

// j'aurais tranmis a la fonction authentififcation EMAIL et MDP pour vérificatoin

//CORRECTION à prendre sur l'envoi de Hugo
var email, mdp;

email = "wf2@h1-media.fr";
mdp = "wf3";

/*LES OPERATEURS LOGIQUES
Et : && ou AND
ou : || ou OR
contraire : ! ou NOT
true
false
*/

/*Remarque, pour encrypter les mots de passe, on n'utilise plus MD5, maintenant on utilise SHA1*/