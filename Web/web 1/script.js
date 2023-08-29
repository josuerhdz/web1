const carCards = document.querySelectorAll('.car-card');

carCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('active');
        carCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.add('inactive');
            }
        });
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('active');
        carCards.forEach(otherCard => {
            otherCard.classList.remove('inactive');
        });
    });
});
