function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const temp = 24;
const wind = 10;

let result = "N/A";

if (temp <= 10 && wind > 4.8) {
    result = calculateWindChill(temp, wind);
}

document.getElementById("windchill").textContent = result;

// footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;