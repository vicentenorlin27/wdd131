document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Metadata
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }

    // 2. Mobile Menu Toggle
    const menuButton = document.getElementById("menu");
    const navMenu = document.querySelector("nav");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            menuButton.classList.toggle("show");
        });
    }
});

// 3. Complete Temple Array Matrix
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Abia State, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/temple1.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/temple2.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/temple3.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2022, May, 22",
        area: 6861,
        imageUrl: "images/temple8.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/temple7.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/temple6.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/temple4.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl: "images/temple5.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 11610,
        imageUrl: "images/temple9.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "images/temple10.jpg"
    }
];

const galleryContainer = document.querySelector(".gallery");
const mainHeading = document.querySelector("main h2");

function displayTemples(filteredList) {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = "";

    filteredList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <div class="card-info">
                <p><span class="label">Location:</span> ${temple.location}</p>
                <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
                <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <div class="card-image-wrapper">
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
            </div>
        `;
        galleryContainer.appendChild(card);
    });
}

// Initial display setup
displayTemples(temples);

// Filter registration
const setupFilter = (selectorId, headingText, filterCondition) => {
    const element = document.querySelector(selectorId);
    if (element) {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            if (mainHeading) mainHeading.textContent = headingText;
            displayTemples(temples.filter(filterCondition));
        });
    }
};

setupFilter("#nav-home", "Home", () => true);
setupFilter("#nav-old", "Old Temples (Built Before 1900)", t => parseInt(t.dedicated.split(",")[0]) < 1900);
setupFilter("#nav-new", "New Temples (Built After 2000)", t => parseInt(t.dedicated.split(",")[0]) > 2000);
setupFilter("#nav-large", "Large Temples (Over 90,000 sq ft)", t => t.area > 90000);
setupFilter("#nav-small", "Small Temples (Under 10,000 sq ft)", t => t.area < 10000);