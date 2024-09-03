// Acessa o localStorage para obter o nome do jogador e as escolhas
const nomeDoJogador = localStorage.getItem('nomeDoJogador');
const escolhas = JSON.parse(localStorage.getItem('escolhas'));

// Inicializa o texto da jornada
let textoJornada = `Você começou sua jornada na vila, ${nomeDoJogador}. `;

// Adiciona o texto baseado nas escolhas do jogador
if (escolhas.floresta) {
    textoJornada += "Você seguiu para a floresta, mas enfrentou um enigma. ";
    textoJornada += escolhas.florestaCerta ? "Você acertou o enigma e conseguiu seguir em frente. " : "Infelizmente, você errou o enigma e não conseguiu prosseguir. ";
} else {
    textoJornada += "Você não visitou a floresta. ";
}

if (escolhas.pantano) {
    textoJornada += "Você então foi para o pântano, onde encontrou um sábio eremita e teve que resolver outro enigma. ";
    textoJornada += escolhas.pantanoCerto ? "Você acertou o enigma e conseguiu avançar para a masmorra. " : "Você errou o enigma e não conseguiu avançar. ";
} else {
    textoJornada += "Você não visitou o pântano. ";
}

if (escolhas.masmorra) {
    textoJornada += "Finalmente, você chegou à masmorra e enfrentou mais um enigma. ";
    textoJornada += escolhas.masmorraCerta ? "Você conseguiu salvar a princesa e completar sua jornada com sucesso!" : "Infelizmente, você não conseguiu salvar a princesa e falhou em sua missão.";
} else {
    textoJornada += "Você não chegou à masmorra.";
}

// Exibe o texto da jornada na página
document.getElementById('jornada').innerText = textoJornada;

// Adiciona um evento ao botão de reinício
document.getElementById('reiniciar').addEventListener('click', () => {
    localStorage.clear(); // Limpa o localStorage
    window.location.href = 'index.html'; // Redireciona para a tela inicial ou hub
});
