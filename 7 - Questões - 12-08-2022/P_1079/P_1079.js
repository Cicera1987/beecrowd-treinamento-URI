// Leia 1 valor inteiro N, 
// que representa o número de casos de 
// teste que vem a seguir.Cada caso de teste 
// onsiste de 3 valores reais, cada um 
// deles com uma casa decimal.Apresente a 
// média ponderada para cada um destes conjuntos 
// de 3 valores, sendo que o primeiro valor tem peso 2, 
// o segundo valor tem peso 3 e o terceiro valor tem peso 5.

// Entrada
// O arquivo de entrada contém um valor inteiro N 
// na primeira linha.Cada N linha a seguir contém um 
// caso de teste com três valores com uma casa decimal cada valor.

//     Saída
// Para cada caso de teste, imprima a média ponderada dos 
// 3 valores, conforme exemplo abaixo.


var input = require('fs').readFileSync('stdin','utf8');

let valores = input.split("\n")
let nota1 = valores[1].split(' ').map(item => parseFloat(item))
let nota2 = valores[2].split(' ').map(item => parseFloat(item))
let nota3 = valores[3].split(' ').map(item => parseFloat(item))
console.log(nota1)
let media = 0

for(i = 1; i <=10000; i++){
media =  (nota1[1] * 2 + nota2[2] *  nota3[3] * 5) /10
    console.log(media) 
}
 
// parei em 20 minutos
