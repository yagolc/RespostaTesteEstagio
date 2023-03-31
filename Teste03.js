const fs = require('fs');

function calcularFaturamento(jsonFilePath) {
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

  // Filtrando os valores de faturamento válidos (diferentes de zero)
  const valoresFaturamento = jsonData.filter(item => item.valor !== 0).map(item => item.valor);

  // Calculando o menor e o maior valor de faturamento
  const menorValor = Math.min(...valoresFaturamento);
  const maiorValor = Math.max(...valoresFaturamento);

  // Calculando a média de faturamento
  const mediaFaturamento = valoresFaturamento.reduce((acc, cur) => acc + cur, 0) / valoresFaturamento.length;

  // Calculando o número de dias com faturamento acima da média
  const diasAcimaMedia = valoresFaturamento.filter(valor => valor > mediaFaturamento).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaMedia,
  };
}

// Exemplo de uso
const result = calcularFaturamento('dados.json');
console.log(result);
