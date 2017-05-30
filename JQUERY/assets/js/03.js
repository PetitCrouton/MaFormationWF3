/*
Le chainage de methode en JQuery
*/

$(function(){

    //je souhaite cacher toutes les div de ma page html
    
    $('div').hide('slow', function(){

        //une fois la méthode hide() terminée, mon alerte peut s'exécuter
        
        alert('Fin du hide');
        //Nota Bene : la fonction s'executera pour l'ensemble des éléments du sélecteur

        //CSS
        $('div').css("background","yellow");
        $('div').css("color","red");

        //Je fais réapparaitre mes div
        $('div').show('slow');
    });//Fin fonction anaonyme

    // En utilisant le chainage de methode on peut faire s'enchainer plusieurs fonctions
    //les unes après les autres

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    // Mais c'est encore trop long!!
    $('p').hide(1000).css({'color':'blue','font-size':'20px'}).delay(2000).show(500);
    //rq avec les accolades on traite en objet

});

