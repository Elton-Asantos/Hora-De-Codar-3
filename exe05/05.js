let n1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let n2 = parseInt(prompt("Digite o segundo número inteiro:"));

let soma = 0;
let contador = 0;

for (let i = n1; i <= n2; i++) {
  soma += i;
  contador++;
}

let media = soma / contador;

alert("A média aritmética é: " + media);



