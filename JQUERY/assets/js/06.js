/*
Les selcteurs d'enfants JQuery

*/

//initialisation de jquery
$(function(){
    // ici commence mon code JQuery
    // Les flemmards.js
    function l(e) {
        console.log(e);
    }

    // Je souhaite sélectionner toutes mes divs
    l($('div'))

    //Je souhaite sélectionner le header
    l($('header'))

    //JE souhaite sélectionner tous les élements déscendants directs (enfants) qui
    // sont dans mon header
    l($('header').children())

    // Je souahite, parmi mes descendants directs, uniquement mes descendants ul
     l($('header').children('ul'))

     // Je souhaite récupérer tous les elements li de mon ul
      l($('header').children('ul').find('li'))

      //je souhaite récupérer uniquement le deuxieme element de mes li
      l($('header').find('li').eq(1))

      //je souhaite connaitre le voisin immediat de mon header
      l($('header').next())
      l($('header').next().next())

      //les parents
      l($('header').parent())


});