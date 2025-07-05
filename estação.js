const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número do mês (1 a 12): ', function(mesStr) {
    const mes = parseInt(mesStr);
  
    if (isNaN(mes) || mes < 1 || mes > 12) {
      console.log('Mês inválido. Por favor, digite um número de 1 a 12.');
      rl.close();
      return;
    }
  
    let estacao = '';
  
    switch(mes) {
      case 12:
      case 1:
      case 2:
        estacao = 'Verão';
        break;
      case 3:
      case 4:
      case 5:
        estacao = 'Outono';
        break;
      case 6:
      case 7:
      case 8:
        estacao = 'Inverno';
        break;
      case 9:
      case 10:
      case 11:
        estacao = 'Primavera';
        break;
    }
  
    console.log(`O mês ${mes} corresponde à estação: ${estacao}`);
    rl.close();
  });