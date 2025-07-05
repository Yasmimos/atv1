const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Escolha a forma geométrica:");
console.log("1 - Quadrado");
console.log("2 - Retângulo");
console.log("3 - Círculo");

rl.question('Digite o número correspondente à forma: ', function(opcao) {
  switch(opcao) {
    case '1':  // Quadrado
      rl.question('Digite o lado do quadrado: ', function(ladoStr) {
        const lado = parseFloat(ladoStr);
        const area = parseFloat((lado * lado).toFixed(2));
        verificar(area);
      });
      break;

    case '2': // Retângulo
      rl.question('Digite a base do retângulo: ', function(baseStr) {
        rl.question('Digite a altura do retângulo: ', function(alturaStr) {
          const base = parseFloat(baseStr);
          const altura = parseFloat(alturaStr);
          const area = parseFloat((base * altura).toFixed(2));
          verificar(area);
        });
      });
      break;

    case '3': // Círculo
      rl.question('Digite o raio do círculo: ', function(raioStr) {
        const raio = parseFloat(raioStr);
        const area = parseFloat((Math.PI * raio * raio).toFixed(2));
        verificar(area);
      });
      break;

    default:
      console.log("Opção inválida.");
      rl.close();
  }
});

// Função para verificar par ou ímpar
function verificar(area) {
  console.log(`A área calculada é: ${area}`);

  // área com casas decimais não faz sentido em par/ímpar diretamente
  // então vamos considerar apenas a parte inteira
  const inteiro = Math.floor(area);

  if (inteiro % 2 === 0) {
    console.log("Parabéns! A área é par, você ganhou!");
  } else {
    console.log("Que pena! A área é ímpar, você perdeu o jogo.");
  }
  rl.close();
}
