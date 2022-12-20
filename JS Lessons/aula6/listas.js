const alunos = ['Gustavo', 'Marina', 'Eduardo'];

alunos[0] // Gustavo 
alunos[1] // Marina 
alunos[2] // Eduardo 
alunos[3] // UNDEFINED 

alunos.push('Renan');
// Adiciona Renan no final da list

alunos[4] = 'Vitória';
// Adiciona Vitória na poisção 4, funciona para substituir

alunos.pop(); 
// Remove o ultimo elemento da lista

alunos.shift(); 
// Remove o primeiro elemento da lista

const professores = []; // Listas podem começar vazia e você ir adicionando coisas nela 

professores.push('teste');
professores.push(10);
// ['teste', 10]

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(6);
notas.push(8);

notas.lenght() // ----> 6 itens

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];
console.log(soma / notas.lenght);

// Estrutura de repetição para ir percorrendo a lista e pegando os valores e ir somando
// Estrutura de repetição = FOR 
// FOR percorre uma quantidade específica de vezes, de 0 à 14

for (let i = 0; // Declaração da variável de controle, como lista começa com 0, aqui começa com 0
    i < 10; // Estrutura condicional (booleano), se passa dentro do código ou não i < array.length
    i++ // O que vai acontecer DEPOIS de executar o código
    ) {
  console.log(i);
}

const nome = "Amanda Villar";

 for (let index = 0; index < nome.length; index++) {
  const letra = nome[index];
    console.log(letra);
    // A, m, a, n, d, a, , V, i, l, l, a, r
 }


const grades = [];

grades.push(5);
grades.push(7);
grades.push(8);
grades.push(2);
grades.push(5);
grades.push(8);

let sum = 0;

for (let i = 0; i < grades.length; i++) {
  const grade = grades[i];
  sum = sum + grade;
}

const averageGrade = sum / grades.length;
console.log(sum); // gives me the sum of all grades added
console.log(averageGrade);