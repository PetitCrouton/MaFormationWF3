//Petite fonction de raccourcis pour ne pas taper document.write
function w(t) {
    document.write(t);
}
//Petite fonction de raccourcis pour ne pas taper console.log
function l(e) {
    console.log(e);
}

var PremierTrimestre = [
    {
        "nom"     : "LIEGEARD",
        "prenom"  : "Hugo",
        "moyenne" : {
                        "francais" : 4,
                        "math"     : 8,
                        "physique" : 18
                    }
    },

        {
        "nom"     : "MANAS",
        "prenom"  : "Tanguy",
        "moyenne" : {
                        "francais" : 6,
                        "math"     : 14,
                        "physique" : 9,
                        "anglais"  : 15.5
                    }
    },

        {
        "nom"     : "ARAUJO",
        "prenom"  : "Thiago",
        "moyenne" : {
                        "francais" : 10,
                        "math"     : 15,
                        "physique" : 15
                    }
    },

];

l(PremierTrimestre);

w('<ol>');
// Je souhaite afficher la liste de mes étudiants
for(i=0 ; i < PremierTrimestre.length ; i++){

    //On récupère l'objet etudiant de l'itération
    let Etudiant = PremierTrimestre[i];

    //Appercu dans la console
    l(Etudiant);

    // Je définis NombreDeMatiere et la SommeDesNotes à 0;
    var NombreDeMatiere = 0, SommeDesNotes = 0;

    //Afficher le prénom et le nom de l'étudiant, 2 techniques: Etudiant.prenom ou PremierTrimestre[i].prenom
    w("<li>");
        w(Etudiant.prenom+" "+PremierTrimestre[i].nom);
   
        w("<ul>");
            for(let matiere in Etudiant.moyenne) {
                //l(Etudiant)
                //l(Etudiant.moyenne[matiere])
                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

                w("<li>");
                    w(matiere+" : " + Etudiant.moyenne[matiere]);
                w("</li>");
            } // Fin de la boucle matière
            w("<li>");
                    w("<strong>Moyenne Générale :</strong> " + (Math.round(SommeDesNotes / NombreDeMatiere)));
            w("</li>");
        w("</ul>");
    w("</li>");
} // Fin de la boucle par étudiant
w('</ol>');