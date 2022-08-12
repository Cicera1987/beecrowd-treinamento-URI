
var input = require('fs').readFileSync('stdin', 'utf8');

var num = input.split("\n").map(item => parseFloat(item));

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 0; i <= num.length; i++) {
    if (num[i] % 2 === 0) {
        par+= 1;
    } 
    if (num[i] % 2 != 0) {
        impar+= 1;
    }
    if (num[i] > 0) {
        positivo+= 1;
    }
    if (num[i] < 0) {
        negativo+= 1;
    }
}
console.log(`${par} valor(es) par(es) 
${impar} valor(es) impar(es) 
${positivo} valor(es) positivos(s) 
${negativo} valor(es) negativo(s)`);


// tempo 19 minutos - não finalizado (negativo ta com erro)