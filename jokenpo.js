const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// mapeamento de jogadas
const opcoes = ["pedra", "papel", "tesoura"];

let pontosUsuario = 0;

console.log("=== JOKENPO ===");
console.log("Regra: o jogo termina quando a máquina vencer!");
console.log("Suas opções: pedra, papel ou tesoura");

function jogar() {
  rl.question('\nEscolha sua jogada: ', function(escolhaUsuario) {
    escolhaUsuario = escolhaUsuario.toLowerCase();

    if (!opcoes.includes(escolhaUsuario)) {
      console.log("Opção inválida. Escolha pedra, papel ou tesoura.");
      jogar();
      return;
    }

    const escolhaMaquina = opcoes[Math.floor(Math.random() * 3)];

    console.log(`A máquina escolheu: ${escolhaMaquina}`);

    if (escolhaUsuario === escolhaMaquina) {
      console.log("Empate! Jogue novamente.");
      jogar();
      return;
    }

    if (
      (escolhaUsuario === "pedra" && escolhaMaquina === "tesoura") ||
      (escolhaUsuario === "papel" && escolhaMaquina === "pedra") ||
      (escolhaUsuario === "tesoura" && escolhaMaquina === "papel")
    ) {
      pontosUsuario++;
      console.log(`Você venceu esta rodada! Pontos acumulados: ${pontosUsuario}`);
      jogar();
    } else {
      console.log("A máquina venceu! Fim do jogo.");
      console.log(`Seus pontos finais: ${pontosUsuario}`);
      rl.close();
    }
  });
}

jogar();
