// FOOTER YEAR

document.getElementById("currentyear").textContent =
    new Date().getFullYear();


// LAST MODIFIED

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// HAMBURGER MENU

const menuButton = document.getElementById("menu-button");

const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("hide");

    if (menuButton.textContent === "☰") {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});