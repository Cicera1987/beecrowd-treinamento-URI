// Leia os quatro valores correspondentes 
// aos eixos x e y de dois pontos quaisquer no plano,
//  p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, 
//  mostrando 4 casas decimais após a vírgula, segundo a fórmula:

// Distancia =

// Entrada
// O arquivo de entrada contém duas linhas de dados. 
// A primeira linha contém dois valores de ponto flutuante: 
// x1 y1 e a segunda linha contém dois valores de 
// ponto flutuante x2 y2.

// Saída
// Calcule e imprima o valor da distância segundo a fórmula 
// fornecida, com 4 casas após o ponto decimal.

const input = require('fs').readFileSync('stdin','utf8');

const valores = input.split("\n");
const [x1, y1] = valores[0].split(" ");
const [x2, y2] = valores[1].split(" ");

const distancia = Math.sqrt(Math.pow( ( x2 - x1), 2) + Math.pow( (y2 - y1),2));


console.log(`${distancia.toFixed(4)}`);