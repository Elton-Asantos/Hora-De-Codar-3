// Obter o valor de N do usuário
const N = parseInt(prompt("Digite um valor inteiro positivo para N:"));

// Verificar se N é maior que zero
if (N > 0) {
  // Loop para iterar sobre cada tabuada de 1 a N
  for (let i = 1; i <= N; i++) {
    // Loop para imprimir os resultados da tabuada atual
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
      document.write("<p>" + i + " x " + j + " = " + i * j + "</p>");
    }
    console.log(); // Imprimir uma linha em branco para separar as tabuadas
    document.write("<br>");
  }
} else {
  alert("O valor de N deve ser maior que zero.");
}