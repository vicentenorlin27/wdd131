document.addEventListener("DOMContentLoaded", () => {

    // FOOTER YEAR
    document.getElementById("currentyear").textContent =
        new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;

    // MENU TOGGLE
    const menuButton = document.getElementById("menu");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuButton.classList.toggle("show");
    });

});