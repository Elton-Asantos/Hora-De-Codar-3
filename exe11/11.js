// Inicializar contadores
let dentroIntervalo = 0;
let foraIntervalo = 0;

// Loop para ler 10 valores do usuário
for (let i = 0; i < 10; i++) {
  let valor = parseInt(prompt(`Digite o valor ${i + 1}:`));

  // Verificar se o valor é NaN
  if (isNaN(valor)) {
    alert("Por favor, digite um número.");
    i--;
    continue;
  }

  // Verificar se o valor está dentro do intervalo
  if (24 <= valor && valor <= 42) {
    dentroIntervalo++;
  } else {
    foraIntervalo++;
    alert("O valor " + valor + " está fora do intervalo (24-42).");

  }

}

