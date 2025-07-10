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
});