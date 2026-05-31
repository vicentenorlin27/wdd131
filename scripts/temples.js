document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Metadata Settings
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }

    // 2. Responsive Mobile Hamburger Menu Toggle
    const menuButton = document.getElementById("menu");
    const navMenu = document.querySelector("nav");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            menuButton.classList.toggle("show");
        });
    }
});

// 3. Complete Array of 9 Temple Objects mapping to your local image paths
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Abia State, Nigeria",
        dedicated: "2005, August, 7", // New
        area: 11500,
        imageUrl: "images/temple1.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21", // Old
        area: 74792,
        imageUrl: "images/temple2.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7", // New & Large
        area: 96630,
        imageUrl: "images/temple3.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2", // Large
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
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10", // Small
        area: 9600,
        imageUrl: "images/temple6.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19", // Large
        area: 156558,
        imageUrl: "images/temple7.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2022, May, 22", // New & Small
        area: 6861,
        imageUrl: "images/temple8.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 11610,
        imageUrl: "images/temple9.jpg"
    }
];

// 4. Dom Placement References
const galleryContainer = document.querySelector(".gallery");
const mainHeading = document.querySelector("main h2");

// 5. Card Component Builder with Native Lazy Loading Enabled
function displayTemples(filteredList) {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = ""; // Wipe clean before drawing cards

    filteredList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;
        galleryContainer.appendChild(card);
    });
}

// Initial full page layout rendering
displayTemples(temples);

// 6. Navigation Link Event Listener Assignment Engines
const connectFilterButton = (idSelector, titleText, filteringLogic) => {
    const linkElement = document.querySelector(idSelector);
    if (linkElement) {
        linkElement.addEventListener("click", (event) => {
            event.preventDefault();
            if (mainHeading) mainHeading.textContent = titleText;
            displayTemples(temples.filter(filteringLogic));
        });
    }
};

connectFilterButton("#nav-home", "Home", () => true);
connectFilterButton("#nav-old", "Old Temples (Built Before 1900)", t => parseInt(t.dedicated.split(",")[0]) < 1900);
connectFilterButton("#nav-new", "New Temples (Built After 2000)", t => parseInt(t.dedicated.split(",")[0]) > 2000);
connectFilterButton("#nav-large", "Large Temples (Over 90,000 sq ft)", t => t.area > 90000);
connectFilterButton("#nav-small", "Small Temples (Under 10,000 sq ft)", t => t.area < 10000);