// Définition des slides
const slides = [
    {
      "image": "slide1.jpg",
      "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      "image": "slide2.jpg",
      "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      "image": "slide3.jpg",
      "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      "image": "slide4.png",
      "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];
  
 // Définition des slides
 const slides = Array.from(document.querySelectorAll('.slide')); // Utilisez la méthode Array.from pour convertir la NodeList en un tableau

 // Variables
 let activeSlideIndex = 0; // Index de la slide active
 
 // Fonction pour mettre à jour les slides
 function updateSlides() {
   slides.forEach((slide, index) => {
     if (index === activeSlideIndex) {
       slide.classList.add('active'); // Ajouter la classe "active" à la slide active
     } else {
       slide.classList.remove('active'); // Supprimer la classe "active" des autres slides
     }
   });
 }
 
 // Initialisation des slides
 updateSlides();
 
 // Écouteur d'événement pour le bouton de navigation vers la droite
 const arrowRightButton = document.getElementById('arrow_right');
 arrowRightButton.addEventListener('click', function() {
   activeSlideIndex = (activeSlideIndex + 1) % slides.length; // Passer à la slide suivante (en boucle)
   updateSlides(); // Mettre à jour l'affichage des slides
 });
 
 // Écouteur d'événement pour le bouton de navigation vers la gauche
 const arrowLeftButton = document.getElementById('arrow_left');
 arrowLeftButton.addEventListener('click', function() {
   activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length; // Passer à la slide précédente (en boucle)
   updateSlides(); // Mettre à jour l'affichage des slides
 });