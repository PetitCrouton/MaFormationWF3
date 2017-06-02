// Décclaration de fonction 
//https://paulund.co.uk/regular-expression-to-validate-email-address
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}
//initialisation de Jquery
$(function(){

//declaration variables
var contacts = [];

//déclaration des variables concernant les champs à vérifier
var nom = $('#nom');
var prenom = $('#prenom');
var email = $('#email');
var tel = $('#tel');

//-----------------------déclaration des fonctions-------------------------------




//Fonction ajouterContact(Contact) Ajouter un contact dans le tableau de contacts,
//mettre à jour le tableau html, reinitialiser le formulaire et afficher une notification
function ajouterContact() {
    
        // création d'un objet pour recueillir les données saisies par chaque utilisateur
       /* var person = {
            'nom'       : nom.val(), 
            'prenom'    : prenom.val(), 
            'email'     : email.val(), 
            'tel'       : tel.val(),
            'contact'   : function() {
                                        return this.nom + " " + this.prenom + " " + this.email + " " + this.tel ;
                                     }
        };

        console.log(person);
        contacts.push(person);
        console.log(contacts);*/

        $('tbody').append('<tr><td>' + nom.val() + '</td><td>' + prenom.val() + '</td><td>' + email.val() + '</td><td>' + tel.val() + '</td></tr>');
}
  



//fonction ReinitialisationDuFormulaire() car apres l'ajout d'un contact, on remet le formulaire à 0!
function ReinitialisationDuFormulaire(){}

//affichage d'une notification
function afficheUneNotification(){
    $(this).prepend('<div class="alert alert-success">Votre demande a bien été envoyée !</div>');
}
/*
 if($(this).find('.has-error').length == 0) {
                 $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée !</div>');
             }else{
                 $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez la saisie de vos informations</div>')
             }
*/
//verification de la presence d'un contact dans Contacts
function estCeQunContactEstPresent(){}

//verification de la validité d'un email
//https://paulund.co.uk/regular-expression-to-validate-email-address
function validateEmail(email){}


//écouter à quel moment le formulaire est soumis
$('#contact').on('submit', function(e){

    //arreter la redirection html5
    e.preventDefault();

    //suppression des différentes erreurs
    $('#contact .has-error').removeClass('has-error');
    $('#contact .text-danger').remove();
    $('#contact .alert-danger').remove();

    //déclaration des variables concernant les champs à vérifier
    var nom = $('#nom');
    var prenom = $('#prenom');
    var email = $('#email');
    var tel = $('#tel');

    //------------vérification de chaque champs------------------

    //vérif champ nom
    if(nom.val().length == 0) { 
       nom.parent().addClass('has-error');
       $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
             }

    //vérif champ prenom
    if(prenom.val() == 0){
        prenom.parent().addClass('has-error')
        $("<p class='text-danger'>N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
    }

    //vérif champ email
     //if(!validateEmail(email.val())){
       // email.parent().addClass('has-error');
       // $("<p class='text-danger'>Vérifiez la saisie de votre adresse mail</p>").appendTo(email.parent());
   // }
    //verif champ tel
     if(tel.val().length == 0 || $.isNumeric(tel.val())==false) {
        tel.parent().addClass('has-error');
        $("<p class='text-danger'>N'oubliez pas de saisir votre numéro de téléphone</p>").appendTo(tel.parent());
    }
    
        //Si formulaire validé, exécuter les fonctions de :
        //      -ajouterContact
        //      -ReinitialisationDuformulaire
        //      -affichageNotification                                                 
    
    if($(this).find('.has-error').length == 0){
            ajouterContact();
            $('.aucuncontact').replaceWith('');
            ReinitialisationDuFormulaire();
            $('.alert alert-success alert-contact').prepend();
            $(this).prepend('<div class="alert alert-success">Votre contact a bien été ajouté !</div>');
            }else{
                 $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez la saisie de vos informations</div>')
            }
        
  

}); //Fin de écouter à quel moment le formulaire est soumis




}); //fin de jquery ready