/* ===================================
   PC Repair Julien - script.js
=================================== */

// Bouton retour en haut
const topBtn = document.getElementById("topBtn");

// Afficher / masquer le bouton au scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

// Scroll vers le haut
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Effet léger sur la navbar au scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.98)";
        navbar.style.boxShadow = "0 0 20px rgba(13,110,253,.2)";
    } else {
        navbar.style.background = "rgba(0,0,0,.95)";
        navbar.style.boxShadow = "none";
    }

});

// Animation simple des liens du menu mobile (fermeture auto)
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.getElementById("menu");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menu.classList.contains("show")) {
            new bootstrap.Collapse(menu).hide();
        }

    });

});

// Petit effet console (optionnel pro)
console.log("%cPC Repair Julien", "color:#0d6efd;font-size:20px;font-weight:bold;");
console.log("Site chargé avec succès 🚀");