document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const nameModal = document.getElementById('nameModal');
    const playerNameInput = document.getElementById('playerName');
    const submitNameButton = document.getElementById('submitNameButton');
    const storyModal = document.getElementById('storyModal');
    const storyText = document.getElementById('storyText');
    const startGameButton = document.getElementById('startGameButton');

    startButton.addEventListener('click', () => {
        nameModal.style.display = 'flex';
    });

    submitNameButton.addEventListener('click', () => {
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            localStorage.setItem('playerName', playerName);
            nameModal.style.display = 'none';
            storyText.innerText = `A princesa foi sequestrada e levada para uma masmorra distante. O reino está em caos, e somente você, ${playerName}, pode resgatá-la. Prepare-se para enfrentar desafios e superar obstáculos em sua jornada épica. Boa sorte, ${playerName}!`;
            storyModal.style.display = 'flex';
        }
    });

    startGameButton.addEventListener('click', () => {
        // Redirecionar para a página da Vila
        window.location.href = 'vila.html'; // Certifique-se de que o nome do arquivo HTML está correto
    });
});
