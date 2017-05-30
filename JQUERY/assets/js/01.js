/*--------------------
Disponibilité du DOM
----------------------*/
/*
A partir du moment où mon DOM, càd l'arborescence de ma page est completement chargee je peux commencer à utiliser JQuery.

Je vais mettre l'ensemble de mon code dans une fonction. Cette fonction sera appelee automatiquement
par JQuery lorsque le DOM sera entierement defini

3 façons de faire :
*/

// 1
jQuery(document).ready(function(){

});


// 2
$(document).ready(function(){

});

// 3
$(function(){
    //ici, le DOM est entièrement chargé, je peux procéder à mon code JS
    alert('Hello World');

    //en JS
    document.getElementById('TextEnJQuery').innerHTML = "Mon texte en JS";

    //en JQuery
    $("#TextEnJQuery").html("Mon texte de très beau !");

});