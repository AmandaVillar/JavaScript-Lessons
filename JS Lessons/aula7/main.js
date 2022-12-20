/*Para usar as funções do outro arquivo, precisa ser imporada
Para isso, usar uma função dentro do Node.js que é o REQUIRE e dentro o nome do arquivo
Só importa o que eu deixei exportar no outro arquivo
*/

//require importa funções que estão sendo exportadas desse arquivo 
const funcoes = require ('./funcoes-auxiliares');


console.log(funcoes);
// {gets: [Function:gets], print: [Function;print]}

console.log(funcoes.gets());
// 10


const pessoa = {
    nome: 'Amanda'
};

const {nome} = pessoa; // == const nome = pessoa.nome;

const {gets, print} = require('./funcoes-auxiliares');
/*criou duas variaveis que recebem as funções gets e print do outro arquivo */