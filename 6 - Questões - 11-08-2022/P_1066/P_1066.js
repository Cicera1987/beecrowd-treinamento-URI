
var input = require('fs').readFileSync('stdin', 'utf8');

var num = input.split("\n").map(item => parseFloat(item));

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 1; i <= num.length; i++) {
    if (num[i] % 2 === 0) {
        par++;
    } else {
        impar++;
    }
    if (num[i] > 0) {
        positivo++;
    }
    if (num[i] < 0) {
        negativo++;
    }
}
console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivos(s)`);
console.log(`${negativo} valor(es) negativo(s)`);

//tempo 19 minutos - não finalizado (negativo ta com erro)