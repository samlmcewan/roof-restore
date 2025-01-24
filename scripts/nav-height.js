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
            } else {
                // Menu is about to expand
                navbarBg.style.background = "linear-gradient(98deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 1) 80%)";
            }
            count++;
        });
    }
});

