document.addEventListener('DOMContentLoaded', () => {
    // Adiciona ouvintes de eventos para os botões dos caminhos
    document.getElementById('caminho1').addEventListener('click', function() {
        // Redireciona para a página final com resultado de erro para o Caminho 1
        window.location.href = 'final.html?resultado=erro&caminho=1';
    });

    document.getElementById('caminho2').addEventListener('click', function() {
        // Redireciona para a página final com resultado de sucesso para o Caminho 2
        window.location.href = 'final.html?resultado=sucesso&caminho=2';
    });

    document.getElementById('caminho3').addEventListener('click', function() {
        // Redireciona para a página final com resultado de erro para o Caminho 3
        window.location.href = 'final.html?resultado=erro&caminho=3';
    });
});
