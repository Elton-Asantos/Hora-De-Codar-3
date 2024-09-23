// Obter o valor de N do usuário
const N = parseInt(prompt("Digite um valor inteiro positivo para N:"));

// Verificar se N é maior que zero
if (N > 0) {
  // Imprimir todos os valores inteiros de 1 a N
  for (let i = 1; i <= N; i++) {
    console.log(i);
    document.write("<p>" + i + "</p>");
  }
} else {
  alert("O valor de N deve ser maior que zero.");
}