document.addEventListener("DOMContentLoaded", function () {
    const clickableSection = document.getElementById("clickable-section");

    clickableSection.addEventListener("click", function () {
        // Change the background color when clicked
        clickableSection.style.backgroundColor = "#e74c3c";
    });
});