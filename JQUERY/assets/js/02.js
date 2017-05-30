/*
Les selecteurs JQuery
*/

// format : $('selcteur')
// en JQ, tous les selecteurs sont disponibles

// dom ready
$(function() {

    //les flemmards.js
    function l(e){
        console.log(e);
    }
    // selectionner les balises span:
        //en JS
        l('SPAN en JS :')
        l(document.getElementsByTagName('span'))

        //en JQ
        l('SPAN en JQ')
        l($("span"))

    // Selectionner mon menu
        // en JS
        l("ID via JS : ")
        l(document.getElementById("menu"))

        // en JQ
        l("ID en JQuery : ")
        l($("#menu"))
    
    // Selectionner par attribut

    l('Par Attribut :')
    l($("[href='http://www.google.fr']"))

});