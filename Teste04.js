const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, cur) => acc + cur);
  
  const representacaoEstados = {};
  for (let estado in faturamentoEstados) {
    const representacao = (faturamentoEstados[estado] / faturamentoTotal) * 100;
    representacaoEstados[estado] = representacao;
  }
  
  console.log(representacaoEstados);
  