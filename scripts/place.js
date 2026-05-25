// Function computing standard wind chill metric outputs
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Initializing execution upon safe page completion loads
document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillDisplay = document.getElementById("windchill");

    if (tempElement && windElement && windChillDisplay) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        let result = "N/A";

        // Criteria validation checks
        if (temp <= 10 && wind > 4.8) {
            result = `${calculateWindChill(temp, wind)} °C`;
        }

        windChillDisplay.textContent = result;
    }

    // Dynamic configuration variables inside footer structures
    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
});