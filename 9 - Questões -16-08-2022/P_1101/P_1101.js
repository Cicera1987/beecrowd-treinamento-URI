var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(' ').map(item => parseInt(item))

let x = 0
let y = 0
let soma = 0

while ((x >= 0) && (y >= 0)) {
    if (x > y) {
        for (y = y; y <= x; y++) {
            soma += 
            y+=1
            
        } console.log(`${y}Sum= ${soma} `)


    } else {
        for (x = x; x <= y; x++) {
            soma += 
            x+=1
            
        } console.log(`${x} Sum= ${soma}`)
    }

}
// tempo 23 munitos lup infinito

