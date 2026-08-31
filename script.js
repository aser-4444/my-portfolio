const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const humburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});