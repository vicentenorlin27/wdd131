document.addEventListener("DOMContentLoaded", () => {
    // 1. Set Footer Timestamps Dynamically
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;

    // 2. Interactive Mobile Drawer Menu Action
    const menuButton = document.getElementById("menu");
    const navMenu = document.querySelector("nav");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            menuButton.classList.toggle("show");
        });
    }

    // 3. Central Temple Records Array
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

    // Unified Card Generator Engine (Includes Native Lazy Loading & Dimension Properties)
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

    // Default Load: Present all album contents on landing page
    displayTemples(temples);
    document.getElementById("nav-home")?.classList.add("active");

    // Dynamic Navigation Selection State Manager
    function updateActiveState(activeId) {
        document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
        document.getElementById(activeId)?.classList.add("active");

        // Collapse mobile menu auto after interactive button selection click
        if (window.innerWidth < 768) {
            navMenu.classList.remove("show");
            menuButton.classList.remove("show");
        }
    }

    // Wiring up Click Action Events to our Active Filter Navigation links
    document.getElementById("nav-home")?.addEventListener("click", (e) => {
        e.preventDefault();
        mainHeading.textContent = "Home";
        displayTemples(temples);
        updateActiveState("nav-home");
    });

    document.getElementById("nav-old")?.addEventListener("click", (e) => {
        e.preventDefault();
        mainHeading.textContent = "Old Temples (Built Before 1900)";
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0].trim()) < 1900));
        updateActiveState("nav-old");
    });

    document.getElementById("nav-new")?.addEventListener("click", (e) => {
        e.preventDefault();
        mainHeading.textContent = "New Temples (Built After 2000)";
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0].trim()) > 2000));
        updateActiveState("nav-new");
    });

    document.getElementById("nav-large")?.addEventListener("click", (e) => {
        e.preventDefault();
        mainHeading.textContent = "Large Temples (Over 90,000 sq ft)";
        displayTemples(temples.filter(t => t.area > 90000));
        updateActiveState("nav-large");
    });

    document.getElementById("nav-small")?.addEventListener("click", (e) => {
        e.preventDefault();
        mainHeading.textContent = "Small Temples (Under 10,000 sq ft)";
        displayTemples(temples.filter(t => t.area < 10000));
        updateActiveState("nav-small");
    });
});