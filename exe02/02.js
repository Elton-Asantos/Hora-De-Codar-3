// Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO".

let inicio = 30;
let fim = 0;

while (inicio > fim) {
    console.log(inicio);
    inicio--;
    document.write("<p> Faltam " + inicio + " segundos </p>");


}
document.write('Explosão!')

