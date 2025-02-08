console.log("Le fichier script.js est correctement inclus.");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transition = "transform 0.3s ease, color 0.3s ease";
    link.style.transform = "scale(1.2)";
    link.style.color = "#f39c12";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
    link.style.color = "";
  });
});
const textElement = document.querySelector(".typewriter");
const text = "The Lantern Corps";
let index = 0;

function typeWriterEffect() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index); // Ajoute une lettre
    index++;
    setTimeout(typeWriterEffect, 100); // Attend 100 ms avant d'ajouter la suivante
  }
}

typeWriterEffect(); // Lancer l'animation

const servicesItems = document.querySelectorAll(".services-item");

function showItemsOnScroll() {
  servicesItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 50) {
      item.classList.add("show"); // Ajoute la classe pour déclencher l'animation
    }
  });
}

// Appeler la fonction lors du défilement
window.addEventListener("scroll", showItemsOnScroll);

// Appel initial pour afficher les éléments déjà visibles
showItemsOnScroll();
document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector('a[href="#renvoi2"]');
  const popup = document.getElementById("contact-popup");
  const closePopup = document.querySelector(".close-popup");

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("renvoi2").scrollIntoView({ behavior: "smooth" });
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
