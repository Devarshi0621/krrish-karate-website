const slides = document.querySelectorAll(".bg-slide");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);

/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuToggle.innerHTML = '<i class="fas fa-xmark"></i>';

    }else{

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    }

});


/* CLOSE MENU AFTER CLICKING A LINK */

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ==============================
// TOURNAMENT SLIDER
// ==============================

const tournamentImages = [
    "images/tournament1.jpeg",
    "images/tournament2.jpeg",
    "images/tournament3.png",
    "images/tournament4.png",
    "images/tournament5.png",
    "images/tournament6.jpeg"
];



let tournamentIndex = 0;

const tournamentImage = document.getElementById("tournamentImage");
const tournamentDots = document.querySelectorAll(".t-dot");

function showTournament(index) {

    tournamentIndex = index;

    // Fade out
    tournamentImage.classList.add("changing");

    setTimeout(() => {

        // Change image
        tournamentImage.src = tournamentImages[tournamentIndex];

        // Fade in
        tournamentImage.classList.remove("changing");

    }, 350);

    // Update dots
    tournamentDots.forEach(dot => {
        dot.classList.remove("active");
    });

    tournamentDots[tournamentIndex].classList.add("active");
}

function changeTournament(direction) {

    tournamentIndex += direction;

    if (tournamentIndex >= tournamentImages.length) {
        tournamentIndex = 0;
    }

    if (tournamentIndex < 0) {
        tournamentIndex = tournamentImages.length - 1;
    }

    showTournament(tournamentIndex);
}

// Automatic slider
setInterval(() => {
    changeTournament(1);
}, 4000);

document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".review-track");
  const slides = document.querySelectorAll(".review-slide");
  const dots = document.querySelectorAll(".review-dot");
  const prev = document.querySelector(".review-prev");
  const next = document.querySelector(".review-next");

  let current = 0;

  function showReview(index) {

    if (index >= slides.length) {
      current = 0;
    } else if (index < 0) {
      current = slides.length - 1;
    } else {
      current = index;
    }

    track.style.transform =
      "translateX(-" + (current * 100) + "%)";

    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });

    dots[current].classList.add("active");
  }

  next.addEventListener("click", function() {
    showReview(current + 1);
  });

  prev.addEventListener("click", function() {
    showReview(current - 1);
  });

  dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
      showReview(index);
    });
  });

  setInterval(function() {
    showReview(current + 1);
  }, 4000);

});