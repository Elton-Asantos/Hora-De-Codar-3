let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

while (num2 <= 0) {
    alert("O segundo número não pode ser zero e nem negativo. Digite novamente: ");
    num2 = parseFloat(prompt("Digite o segundo número:"));

}
let resultado = num1 / num2;
alert("O resultado da divisão é: " + resultado);
