// Fonte dos dados de faturamento diário em formato JSON
let dadosFaturamentoDiarioJSON = '{"01": 500, "02": 800, "03": 700, "04": 600, "05": 0, "06": 0, "07": 1000, "08": 900, "09": 750, "10": 600, "11": 850, "12": 950, "13": 1200, "14": 1000, "15": 850, "16": 700, "17": 600, "18": 500, "19": 0, "20": 0, "21": 1100, "22": 900, "23": 750, "24": 600, "25": 850, "26": 950, "27": 1200, "28": 1000, "29": 850, "30": 700, "31": 600}';

// Converte os dados de faturamento diário de JSON para objeto JavaScript
let faturamentoDiario = JSON.parse(dadosFaturamentoDiarioJSON);

// Calcula o menor e o maior valor de faturamento ocorrido em um dia do mês
let menorValor = Infinity;
let maiorValor = -Infinity;

for (let dia in faturamentoDiario) {
  let valor = faturamentoDiario[dia];
  if (valor > 0) { // considera apenas dias com faturamento
    if (valor < menorValor) {
      menorValor = valor;
    }
    if (valor > maiorValor) {
      maiorValor = valor;
    }
  }
}

console.log("Menor valor de faturamento: " + menorValor);
console.log("Maior valor de faturamento: " + maiorValor);

// Calcula a média mensal de faturamento, ignorando os dias sem faturamento
let somaFaturamento = 0;
let numDiasFaturamento = 0;

for (let dia in faturamentoDiario) {
  let valor = faturamentoDiario[dia];
  if (valor > 0) { // considera apenas dias com faturamento
    somaFaturamento += valor;
    numDiasFaturamento++;
  }
}

let mediaMensal = somaFaturamento / numDiasFaturamento;

// Calcula o número de dias em que o faturamento diário foi superior à média mensal
let numDiasSuperiorMedia = 0;

for (let dia in faturamentoDiario) {
  let valor = faturamentoDiario[dia];
  if (valor > mediaMensal) {
    numDiasSuperiorMedia++;
  }
}

console.log("Número de dias em que o faturamento diário foi superior à média mensal: " + numDiasSuperiorMedia);
