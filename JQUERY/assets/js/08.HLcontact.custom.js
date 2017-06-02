
// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Déclaration de Variables
    var CollectionDeContacts = [];
    
// Décclaration de fonction 
    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){
      
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}
    

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
   function ajouterContact(UnContact) {
       
        // Ajout de "UnContact" dans le tableau "CollectionDeContact"
        CollectionDeContacts.push(UnContact);
        console.log(CollectionDeContacts);

        //on cache la phrase "aucun contact" qui a une classe du même nom
        $('.aucuncontact').hide();

        // mise à jour du HTML
        // conseil, d'abord faire dans le html pour se rendre compte des éléments à intégrer
        $('#LesContacts').find('tbody').append('<tr><td>' + UnContact.nom + '</td><td>' + UnContact.prenom + '</td><td>' + UnContact.email + '</td><td>' + UnContact.tel + '</td></tr>');

        //réinitialisation du formaulaire
        reinitialisationDuFormulaire();

        //affiche une notification
        afficheUneNotification();
   }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {
        // via JS
        //document.getElementById('contact').reset();

        //via JQ
        $('#contact').get(0).reset();

        //méthode d'Alex
        //$('#contact .form-control').val('');
    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $('.alert-contact').fadeIn().delay(3000).fadeOut();
    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnContact) {
        // Booleen qui indique la presence ou pas d'un contact
        var estPresent = false;

        //on parcourt le tableau à la recherche d'une correspondance
        for(var i=0;i<CollectionDeContacts.length;i++){

            //vérification pour chaque contact du tableau pour verifier correspondance sur objet Contact
        if(UnContact.email === CollectionDeContacts[i].email){

                // si une correspondance est trouvée "estprésent" passe à true
                estPresent = true;

                //on arrête la boucle, plus besoin de poursuivre
                break;

            }
        }
        //on retourne estPresent
        return estPresent;
    }



   /* --------------------------------------------------------------
                   TRAITEMENT DE MON FORMULAIRE
   -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit',function(e){ //e c'est l'evenement on s'en ressert pour le preventDefault qui permet de stooper la redirection de la page
    console.log(e);
    //stopper la redirection de la page
    e.preventDefault();
    //verification des champs à verifier
    var nom, prenom, email, tel;
    nom = $('#nom');
    prenom = $('#prenom');
    email = $('#email');
    tel = $('#tel');

        // verification des informations - autre methode
        var mesInformationsSontValides = true;

            //verifiacation du nom
            if(nom.val().length == 0){
                mesInformationsSontValides = false;
            }
            //verifiacation du prenom
            if(prenom.val().length == 0){
                mesInformationsSontValides = false;
            }
            //verifiacation du mail
             if(!validateEmail(email.val())){
                 mesInformationsSontValides = false;
             }
            //verifiacation du tel
            if(tel.val().length == 0){
                mesInformationsSontValides = false;
            }
        
        console.log(mesInformationsSontValides)
        if(mesInformationsSontValides){
            // Tout est correct, préparation de l'objet Contact qui corrrespond aux données saisies par l'utilisateur
            var Contact = {
                'nom'    : nom.val(),
                'prenom' : prenom.val(),
                'email'  : email.val(),
                'tel'    : tel.val(),
            };//fin de l'objet Contact

            //Verification avec estCeQunContactestPresent?
            if(!estCeQunContactEstPresent(Contact)){

                // Ajout du contact
                ajouterContact(Contact);



            } else {
                alert('Attention\ncontact déjà présent');
                reinitialisationDuFormulaire();
            }

        } else {
            // Les infos ne sont pas valides
            alert('Attention\nVeuillez bien remplir tous les champs.');
        }

    }); //fin de détection de la soumission de formulaire
}); // -- Fin de jQuery READY !