// 1. Data Structures: Array of Base Price Configuration Objects
const rateSystem = [
    { type: "drywall", baseRate: 60 },
    { type: "framing", baseRate: 85 },
    { type: "finishing", baseRate: 45 }
];

// 2. LocalStorage Session Visitor Analytics Tracking Engine
function monitorVisits() {
    let trackingValue = localStorage.getItem("estimatorCalculationsCount") || 0;
    const trackerContainer = document.getElementById("visit-counter");
    if (trackerContainer) {
        trackerContainer.innerHTML = `You have performed <strong>${trackingValue}</strong> automated calculations during this browser session.`;
    }
}

function incrementTrackingStorage() {
    let currentCount = parseInt(localStorage.getItem("estimatorCalculationsCount") || 0);
    currentCount++;
    localStorage.setItem("estimatorCalculationsCount", currentCount);
    monitorVisits();
}

// 3. Mathematical Formula & Dynamic Template Rendering Process
function executeCalculation() {
    const chosenService = document.getElementById("service-type").value;
    const inputSizeString = document.getElementById("dimensions").value;
    const outputDisplay = document.getElementById("calc-result");

    // Conditional Branch checking for empty or negative input parameters
    if (!inputSizeString || inputSizeString <= 0) {
        outputDisplay.innerHTML = `<p style="color: #b91c1c;">Please input a valid dimensional size number greater than 0.</p>`;
        return;
    }

    const numericUnits = parseFloat(inputSizeString);

    // Array Method Array.prototype.find() iteration logic
    const matchedRate = rateSystem.find(item => item.type === chosenService);
    const costPerUnit = matchedRate ? matchedRate.baseRate : 0;

    // Calculate baseline project rates
    let baselineCost = numericUnits * costPerUnit;

    // Evaluate optional inputs and extra costs
    let calculatedAddons = 0;
    const needsPaint = document.getElementById("paint-opt").checked;
    const needsCleanup = document.getElementById("cleanup-opt").checked;

    if (needsPaint) {
        calculatedAddons += (numericUnits * 15);
    }
    if (needsCleanup) {
        calculatedAddons += 100;
    }

    const absoluteFinalTotal = baselineCost + calculatedAddons;

    // EXCLUSIVELY Template Literals implementation for precise DOM rendering output
    outputDisplay.innerHTML = `
        <p><strong>Selected Task Module:</strong> ${chosenService.toUpperCase()}</p>
        <p><strong>Scope Scale:</strong> ${numericUnits} Units (SqFt)</p>
        <p><strong>Base Rate Fee:</strong> $${baselineCost.toFixed(2)}</p>
        <p><strong>Add-on Option Total:</strong> $${calculatedAddons.toFixed(2)}</p>
        <hr style="margin: 0.5rem 0; border: 0; border-top: 1px solid #cbd5e1;">
        <p style="font-size: 1.2rem; color: #0d5c75;"><strong>Estimated Grand Total: $${absoluteFinalTotal.toFixed(2)}</strong></p>
    `;

    incrementTrackingStorage();
}

// 4. Initial Event Listeners setup
document.addEventListener("DOMContentLoaded", () => {
    // Inject Year parameter to respect footer guidelines
    const yearHook = document.getElementById('year');
    if (yearHook) yearHook.textContent = new Date().getFullYear();

    monitorVisits();

    // Map processing hooks directly to input changes for seamless live responses
    const formInputs = document.querySelectorAll("#service-type, #dimensions, #paint-opt, #cleanup-opt");
    formInputs.forEach(element => {
        element.addEventListener("input", executeCalculation);
    });
});