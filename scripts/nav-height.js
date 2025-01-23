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
