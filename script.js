document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Hide the "Back to Top" button initially
    backToTopButton.style.display = "none";

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight / 2) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
