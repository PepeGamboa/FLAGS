// flags-flip.js

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.flag-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent flipping if clicking on a link or button inside the card
            if (e.target.closest('a,button')) return;
            card.classList.toggle('flipped');
        });
    });
});
