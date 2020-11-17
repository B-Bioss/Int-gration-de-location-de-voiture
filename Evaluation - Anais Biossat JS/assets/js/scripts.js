/**
 * CAROUSEL HEADER
 * -----------------------
 */

// Tableau contenant tous mes images
var images = ["assets/Images/background2.jpg", "assets/Images/background3.jpg", "assets/Images/background4.jpg"];

// Pointeur correspondant à l'image actuelle
var i = 0;

// On attends que le DOM soit chargé
$(function() {
    // Appelle une fonction toutes les X secondes (temps en ms)
    setInterval(changePictureHeader, 5000);
});

// Fonction permettant de changer l'image du header
function changePictureHeader()
{
    if (i === images.length - 1) {
        i = 0;
    }
    else {
        i++;
    }

    // If ternaire
    // pointeur = (pointeur === images.length - 1) ? 0 : pointeur += 1;

    $("header.masthead").css("background-image", `url(${images[i]})`);
}




/**
 * PETIT CAROUSEL
 * -----------------------
 */

// Tableau de toutes mes images
var car = ["Images/vehicule1.png", "Images/vehicule2.png", "Images/vehicule3.png", "Images/vehicule4.png"];

// Pointeur correspondant à l'image actuelle
var pointeur = 0;

// Attend que le DOM soit chargé
window.onload = function () {

    // Récupération d'éléments du DOM
    var content = document.querySelector("#content");
    var flecheDroite = document.querySelector("#avancer");
    var flecheGauche = document.querySelector("#reculer");

    // Écouteurs d'évènements
    // ----------------------------------

    // Flèche de droite
    flecheDroite.addEventListener("click", avancer);
    

    // Flèche de gauche
    flecheGauche.addEventListener("click", reculer);
}
   
    // ----------------------------------


// "Avance" dans le carousel
function avancer()
{
    // Je vérifie si l'index de mon pointeur est égal à l'index final de mon tableau
    if (pointeur == car.length - 1) {
        // Si oui, je réinitialise mon pointeur
        pointeur = 0;
    }
    else {
        // Sinon, j'incrémente celui-ci de 1
        pointeur++;
    }

    // Récupération de la balise HTML "img" de la page HTML
    let image = document.querySelector("img");
}

// "Recule" dans le carousel
function reculer()
{
    // Si le pointeur est égal à zéro 
    if (pointeur == 0) {
        // Alors je met à jour l'index du pointeur en lui donnant le dernier index du tableau
        pointeur = car.length - 1;
    }
    else {
        // Sinon, je décrémente de 1
        pointeur--;
    }

    // Récupération de la balise HTML "img" de la page HTML
    let image = document.querySelector("img");

}

/**
 * SCROLL INFINIT
 * ----------------------------------
 */

// Définit le nombre d'articles à afficher à la fois
var pageMax = 4;

// Contient l'index suivant sur lequel commencer
var pageNext = 0;

$(function() {
    // Un écouteur d'évènement sur mon document
    // "J'écoute" le scroll de la page
    $(document).on("scroll", scrollInfini);
});

// Charge des articles au fur et a mesure que l'on scroll sur la page
function scrollInfini()
{
    // Hauteur du hauteur
    let hauteurDocument = $(this).height();

    // Hauteur intérieur de la fenêtre
    let hauteurFenetre = $(window).height();

    // Nombre de pixels entre le haut du document et la position de la barre de scroll
    let positionScroll = $(this).scrollTop();

    // console.log(positionScroll + hauteurFenetre, hauteurDocument);
    if (positionScroll + hauteurFenetre >= hauteurDocument - 1) {

        // Récupère tous les articles (DIV ayant la classe CSS "post-preview")
        let articles = $('.post-preview');

        // Clone le contenu de la variable "articles"
        let clones = articles.clone();

        // Insère les articles au dessus du bouton "Voir la suite"
        $('.post-preview').parent().after(clones);


            };
            
        };
