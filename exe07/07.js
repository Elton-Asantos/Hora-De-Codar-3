let nota1, nota2, nota3, nota4, nota5, nota6;
let somaNotas = 0;

// Ler e validar a primeira nota
do {
    nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
    if (nota1 < 0 || nota1 > 10) {
    alert("Nota inválida ! Digite novamente: "); 
    }
} while (nota1 < 0 || nota1 > 10);

// Ler e validar a segunda nota
do {
    nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));
    if (nota2 < 0 || nota2 > 10) {
    alert("Nota inválida ! Digite novamente: "); 
    }
} while (nota2 < 0 || nota2 > 10);

// Ler e validar a terceira nota
do {
    nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10):"));
    if (nota3 < 0 || nota3 > 10) {
    alert("Nota inválida ! Digite novamente: "); 
    }
} while (nota3 < 0 || nota3 > 10);

// Ler e validar a quarta nota
do {
    nota4 = parseFloat(prompt("Digite a quarta nota (0 a 10):"));
    if (nota4 < 0 || nota4 > 10) {
    alert("Nota inválida ! Digite novamente: "); 
    } 
} while (nota4 < 0 || nota4 > 10);

// Ler e validar a quinta nota
do {
    nota5 = parseFloat(prompt("Digite a quinta nota (0 a 10):"));
    if (nota5 < 0 || nota5 > 10) {
    alert("Nota inválida ! Digite novamente: "); 
    }
} while (nota5 < 0 || nota5 > 10);

// Ler e validar a sexta nota
do {
    nota6 = parseFloat(prompt("Digite a sexta nota (0 a 10):"));
    if (nota6 < 0 || nota6 > 10) {
    alert("Nota inválida ! Digite novamente: "); 
    }
} while (nota6 < 0 || nota6 > 10);


// Somar as notas válidas
somaNotas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;

// Calcular a média
let media = somaNotas / 6;

// Calcular a média no alert
alert("A média do aluno é: " + media);


