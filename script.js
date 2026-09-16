const btn = document.getElementById("darkModeBtn");
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
}

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
});

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});    