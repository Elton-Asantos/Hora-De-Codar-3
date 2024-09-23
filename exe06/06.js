
let alunosAprovados = 0; // Inicializa o contador de alunos aprovado
function calcularMedia() {
  // Lê as notas do aluno
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));

  // Calcula a média
  let media = (nota1 + nota2) / 2;

  // Verifica se o aluno está aprovado
  if (media >= 9.5) {
    alert(`Aprovado! Média: ${media.toFixed(2)}`);
    alunosAprovados++; // Incrementa o contador se aprovado
  } else {
    alert(`Reprovado! Média: ${media.toFixed(2)}`);
  }
}

// Loop principal
while (true) {
  calcularMedia(); // Chama a função para calcular a média

  // Pergunta se o usuário quer calcular outra média
  let continuar = prompt("Calcular a média de outro aluno? (Sim/Não)").toUpperCase();

  if (continuar !== "SIM") {
    break;
    
  }
}

alert(`Total de alunos aprovados: ${alunosAprovados}`);
