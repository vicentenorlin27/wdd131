// Product Array Specification tailored to Vicente Construction LLC
const products = [
    { id: "dr-comm", name: "commercial steel door & frame", averagerating: 4.9 },
    { id: "dr-wood", name: "architectural wood door", averagerating: 4.8 },
    { id: "hd-spec", name: "commercial door hardware package", averagerating: 4.7 },
    { id: "fr-metal", name: "metal stud framing service", averagerating: 4.9 },
    { id: "dw-finish", name: "drywall installation & finishing", averagerating: 4.6 },
    { id: "cp-trim", name: "finish carpentry (trim & baseboards)", averagerating: 4.8 }
];

// Populate Select Menu Options dynamically on page load
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name.replace(/\b\w/g, char => char.toUpperCase());
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