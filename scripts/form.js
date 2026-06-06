// Product Array Specification
const products = [
    { id: "fc-1020", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power cells", averagerating: 4.7 },
    { id: "fs-1980", name: "time circuits", averagerating: 4.2 },
    { id: "nv-1995", name: "warp drive", averagerating: 4.9 },
    { id: "jm-2010", name: "hl-78 processor", averagerating: 4.0 }
];

// Populate Select Menu Options
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            // Capitalize names nicely for display
            option.textContent = product.name.replace(/\b\w/g, c => c.toUpperCase());
            productSelect.appendChild(option);
        });
    }

    // Dynamic Footer Meta Information
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification Date: ${document.lastModified}`;
    }
});