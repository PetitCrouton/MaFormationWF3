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
// initialisation de JQuery
$(function(){

    //ecouter à quel moment le formulaire est soumis
    //a la soumission du formulaire, je vais executer une fonction anonyme
    // rappel en js on aurait fait : document.getElementById('contact').addEventListener('submit',MaFonctionAExecuter);

    $('#contact').on('submit',function(e){
        //event correspond ici à notre evenement "submit"

        //arreter la redirection html5
        event.preventDefault();

        //Supression des différentes erreurs
        // Je cible tous les elements qui contiennent la classe has-error, puis je supprime
        //has-error pour ces eleemnts et idem pour les text danger
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert-danger').remove();

        //déclaration des variables avec les champs à vérifier (simplifie la vie, évite de faire appel aux selecteurs par la suite)
        var nom = $('#nom');
        var prenom = $('#prenom');
        var email = $('#email');
        var tel = $('#tel');

        //verification de chaque champs
             
             // 1 verification du nom
             if(nom.val() == "") { // ou if(nom.val().length == 0)
                nom.parent().addClass('has-error');

                //on ajoute une indication texte
                $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
             }

             // 2 vérfication du prénom
             if(prenom.val().length == 0) {
                prenom.parent().addClass('has-error');
                //on ajoute une indication de texte
                $("<p class='text-danger'>N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
             }

               // 3 vérfication de l'email
             if(!validateEmail(email.val())){
                email.parent().addClass('has-error');
                //on ajoute une indication de texte
                $("<p class='text-danger'>Vérifiez la saisie de votre adresse mail</p>").appendTo(email.parent());
            }

                // 3 vérfication du tel
             if(tel.val().length == 0 || $.isNumeric(tel.val())==false) {
                tel.parent().addClass('has-error');
                //on ajoute une indication de texte
                $("<p class='text-danger'>N'oubliez pas de saisir votre numéro de téléphone</p>").appendTo(tel.parent());
             }

             if($(this).find('.has-error').length == 0) {
                 $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée !</div>');
             }else{
                 $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifiez la saisie de vos informations</div>')
             }



    });
});