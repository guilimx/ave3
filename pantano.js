document.addEventListener('DOMContentLoaded', () => {
    const buttonEco = document.getElementById('button-eco');
    const buttonMisterio = document.getElementById('button-misterio');
    const transition = document.getElementById('transition');
    const continueButton = document.getElementById('continue-button');

    buttonEco.addEventListener('click', () => {
        // Mostra a transição se a resposta estiver correta
        transition.style.display = 'block';

        // Armazena a jornada no localStorage
        const playerName = localStorage.getItem('playerName');
        const journey = `O herói ${playerName} começou sua jornada no pântano e acertou o enigma. Ele seguiu o caminho indicado pelo sábio eremita e chegou à entrada da masmorra.`;
        localStorage.setItem('journey', journey);
    });

    buttonMisterio.addEventListener('click', () => {
        // Redireciona para o HTML final se a resposta estiver errada
        window.location.href = 'final.html';
    });

    continueButton.addEventListener('click', () => {
        // Redireciona para a masmorra
        window.location.href = 'masmorra.html';
    });
});
