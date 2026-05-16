// FOOTER YEAR

const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;


// LAST MODIFIED

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;



// HAMBURGER MENU

const menuButton = document.getElementById("menu-button");

const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("hide");

    if (menuButton.textContent === "☰") {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }

});