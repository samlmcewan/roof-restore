// Run the script only if the screen width is at least 1200px
if (window.matchMedia("(min-width: 1200px)").matches) {
    // Select the first element and get its height
    const firstElement = document.querySelector('.top-contact'); // Replace with your selector
    if (firstElement) {
        const firstElementHeight = firstElement.offsetHeight;

        // Select the second element and set its 'top' property
        const secondElement = document.querySelector('.navbar.fixed-top'); // Replace with your selector
        if (secondElement) {
            secondElement.style.position = 'absolute'; // Ensure it is positioned
            secondElement.style.top = `${firstElementHeight}px`; // Set the top property
        }
    }
}

// Darken the mobile nav on expanding 
document.addEventListener("DOMContentLoaded", function () {
    let count = 1;
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarBg = document.querySelector(".navbar-bg");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarBg && navbarCollapse) {
        navbarToggler.addEventListener("click", function () {
           
            if (count % 2 === 0) {
                // Menu is about to collapse
                navbarBg.style.background = "linear-gradient(98deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 1) 80%)";
                navbarBg.style.clipPath = "polygon(0 0, 100% 0, 100% 80%, 0% 100%)";
            } else {
                // Menu is about to expand
                navbarBg.style.background = "linear-gradient(98deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 1) 80%)";
                navbarBg.style.clipPath = "polygon(0 0, 100% 0, 100% 94%, 0% 100%)";
            }
            count++;
        });
    }
});

// Align the left lines to titles and stretch to edge of screen 
document.addEventListener("DOMContentLoaded", function () {
    // Select all .line-title elements
    const lineTitles = document.querySelectorAll(".line-title");

    // Loop through each .line-title
    lineTitles.forEach(lineTitle => {
        // Calculate the height of the .line-title and divide by 2
        const lineTitleHeight = lineTitle.offsetHeight;
        const halfHeight = lineTitleHeight / 2;

        // Get the .line-left inside this .line-title
        const lineLeft = lineTitle.querySelector(".line-left");

        if (lineLeft) {
            // Set the 'top' property of .line-left
            lineLeft.style.top = `${halfHeight}px`;

            // Calculate the distance from the left side of the screen to the .line-title
            const leftOffset = lineTitle.getBoundingClientRect().left;

            // Set the 'left' and 'width' properties of .line-left
            lineLeft.style.left = `-${leftOffset}px`;
            lineLeft.style.width = `${leftOffset}px`;
        }
    });
});

function setHeightEqualToWidth(selector) {
    // Select the element using the provided selector
    const element = document.querySelector(selector);

    if (element) {
        // Get the width of the element
        const width = element.offsetWidth;

        // Set the height of the element equal to the width
        element.style.height = `${width}px`;
    } else {
        console.warn(`Element with selector "${selector}" not found.`);
    }
}

setHeightEqualToWidth('.testimonial-img .quote-author-img');