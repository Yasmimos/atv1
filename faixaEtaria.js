const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const anoAtual = new Date().getFullYear();

rl.question('Digite seu ano de nascimento: ', function(anoNascimento) {
  const ano = parseInt(anoNascimento);

  if (isNaN(ano) || ano > anoAtual || ano <= 1900) {
    console.log('Ano inválido. Por favor, digite um ano de nascimento válido.');
    rl.close();
    return;
  }

  const idade = anoAtual - ano;

  let faixaEtaria = '';

  if (idade >= 0 && idade <= 12) {
    faixaEtaria = 'criança';
  } else if (idade >= 13 && idade <= 21) {
    faixaEtaria = 'jovem';
  } else if (idade >= 22 && idade <= 59) {
    faixaEtaria = 'adulto';
  } else {
    faixaEtaria = 'idoso';
  }

  console.log(`Você tem ${idade} anos e é classificado como: ${faixaEtaria}`);
  rl.close();
});
