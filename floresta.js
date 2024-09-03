document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de caminho direito e esquerdo
    const rightButton = document.getElementById('right-path');
    const leftButton = document.getElementById('left-path');

    // Adiciona um ouvinte de evento de clique para o botão do caminho à direita
    rightButton.addEventListener('click', function() {
        // Caminho errado
        window.location.href = 'final.html?outcome=wrong'; // Altere a URL para o HTML final
    });

    // Adiciona um ouvinte de evento de clique para o botão do caminho à esquerda
    leftButton.addEventListener('click', function() {
        // Exibe o diálogo com a descrição
        const message = `
            Você decide seguir pelo caminho da esquerda e logo se depara com uma entrada sombria e misteriosa. 
            O som de gotas de água ecoa nas paredes da masmorra à medida que você avança. 
            A escuridão é quase palpável, e a sensação de um perigo iminente é inescapável. 
            Com o coração acelerado, você se prepara para enfrentar o que está por vir...
        `;
        
        // Cria o elemento do diálogo
        const dialog = document.createElement('div');
        dialog.classList.add('dialog');
        dialog.innerHTML = `
            <p>${message}</p>
            <button id="continue-button">Continuar</button>
        `;
        document.body.appendChild(dialog);

        // Adiciona um ouvinte de evento para o botão de continuar
        document.getElementById('continue-button').addEventListener('click', function() {
            // Armazena a jornada no localStorage
            const playerName = localStorage.getItem('playerName');
            const journey = `O herói ${playerName} começou sua jornada na floresta e escolheu o caminho da esquerda, que o levou à entrada da masmorra.`;
            localStorage.setItem('journey', journey);
            
            // Remove o diálogo e redireciona para a página da masmorra
            dialog.remove();
            window.location.href = 'masmorra.html'; // Altere a URL para a página da masmorra
        });
    });
});
