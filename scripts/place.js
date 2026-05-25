// // WIND CHILL FUNCTION (Strict One-Line Return Formula)
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Execute calculations when DOM content is fully ready
document.addEventListener("DOMContentLoaded", () => {
    // // STATIC VALUES FROM THE ELEMENTS
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillDisplay = document.getElementById("windchill");

    if (tempElement && windElement && windChillDisplay) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        let result = "N/A";

        // // CONDITIONS CHECK (Required by Assignment Rubric)
        if (temp <= 10 && wind > 4.8) {
            result = `${calculateWindChill(temp, wind).toFixed(1)} °C`;
        }

        // // DISPLAY RESULT
        windChillDisplay.textContent = result;
    }

    // // FOOTER CONFIGURATION INFO
    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
});