// Triple flip: bandera → datos → escritor/frase
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.flag-card').forEach(card => {
        let face = 0; // 0 = front, 1 = back, 2 = writer
        card.addEventListener('click', function(e) {
            if (e.target.closest('a,button')) return;
            face = (face + 1) % 3;
            card.querySelector('.flag-flip-inner').style.transform = `rotateY(${face * 120}deg)`;
        });
    });
});
