/*

Uma sala contem 5 alunos e ´para cada aluno foi sorteado um número de 1-100.
Faça um programa que receba os 5 números sorteados para os aluinos e mostre o maior número sorteado.

Dados de entrada: 
5
50
10
98
23

Sapida:
98

*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

print(gets()); //5
print(gets()); //50
print(gets()); //10
print(gets()); //98 
print(gets()); //23
print(gets()); //undefined

// RESOLVENDO O PROBLEMA 

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);
// [5, 50, 10, 98, 23]

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor) {
        maiorValorEncontrado = numeroSorteado;
    }
    
}
print(maiorValorEncontrado);