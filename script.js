document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.querySelector('.checkBtn');
    const menu = document.querySelector('.menu2');

    // Ensure the button and menu exist before adding listeners
    if (checkBtn && menu) {
        checkBtn.addEventListener('click', function(event) {
            // Prevents the window click listener from firing immediately
            event.stopPropagation(); 
            menu.classList.toggle('show');
        });
    }

    // Optional: Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });

    // --- Scroll to Top Button Logic ---
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (scrollToTopBtn) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    }

    // When the user clicks on the button, scroll to the top of the document smoothly
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});