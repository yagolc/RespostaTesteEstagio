let entrada = "Uma frase ai"; // String a ser invertida
let inverso = ""; // Variável que irá armazenar a string invertida

// Percorre a string de trás para frente e adiciona cada caractere à variável inverso
for (let i = entrada.length - 1; i >= 0; i--) {
  inverso += entrada[i];
}

console.log(inverso); // Imprime o resultado da inversão da string
