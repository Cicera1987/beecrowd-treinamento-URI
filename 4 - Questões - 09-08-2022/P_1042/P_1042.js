
// Leia 3 valores inteiros e ordene-os em ordem crescente. 
// No final, mostre os valores em ordem crescente, 
// uma linha em branco e em seguida, os valores na sequência 
// como foram lidos.

// Entrada
// A entrada contem três números inteiros.

// Saída
// Imprima a saída conforme foi especificado.
var input = require('fs').readFileSync('stdin', 'utf8');

var valor = input.split(" ");

let x = parseFloat(valor.shift());
let y = parseFloat(valor.shift());
let z = parseFloat(valor.shift());

function imprimirDescente(x, y, z) {
    if (x > y && y > z) {
        console.log(z, y, x)
        console.log(x, y, z) 
    } else if (x > z && z > y) {
        console.log(y, z, x)
        console.log(x, y, z) 
    } else if(z > y && y > x) {
        console.log(x, y, z)
        console.log(x, y, z) 
    }
    else if (y > z && z > x) {
        console.log(x, z, y)
        console.log(x, y, z) 
    } else if (y > x && x > z) {
        console.log(z, x, y)
        console.log(x, y, z)
    } else {
        console.log(y, x, z)
    }

}
imprimirDescente(x, y, z)
