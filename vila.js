function showTransition(destination) {
    const transition = document.getElementById('transition');
    const transitionText = document.getElementById('transition-text');
    const continueButton = document.getElementById('continue-button');
    
    if (destination === 'floresta') {
        transitionText.textContent = 'Você segue pela trilha que leva à Floresta. O ambiente ao seu redor muda rapidamente, com árvores altas e um denso tapete de folhas cobrindo o chão. O som dos pássaros e o sussurrar das folhas criam uma atmosfera mística. A cada passo, você se sente mais próximo do coração da floresta, onde novos desafios e mistérios aguardam por você.';
        continueButton.onclick = () => window.location.href = 'floresta.html';
    } else if (destination === 'pantano') {
        transitionText.textContent = 'Você segue pela trilha que leva ao Pântano. O ar começa a ficar mais úmido, e a vegetação ao redor vai ficando mais densa. Os sons da vila desaparecem lentamente, dando lugar ao silêncio inquietante do pântano. A cada passo, o solo se torna mais macio e o cheiro de terra molhada invade suas narinas. Finalmente, à sua frente, o Pântano surge em toda a sua escuridão e mistério.';
        continueButton.onclick = () => window.location.href = 'pantano.html';
    }

    document.getElementById('buttons').style.display = 'none';
    transition.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const playerName = localStorage.getItem('playerName') || 'Jogador';
    document.getElementById('playerName').textContent = playerName;
});
