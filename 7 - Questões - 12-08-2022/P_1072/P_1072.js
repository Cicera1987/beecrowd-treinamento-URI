
var input = require('fs').readFileSync('stdin','utf8');

var num = input.split("\n").map(item => parseInt(item));

let inInterval = 0;
let outInterval = 0;

for(i = 0; i < num.length; i++){
    if(num[i] >= 10 && num[i] <= 20){
        inInterval+= 1;  
    }else if(num[i] >= 0) {
        outInterval+= 1;
    }
}
console.log(`${inInterval} in`)
console.log(`${outInterval} out`)

// tempo 17 minutos, porem nos testes na uri esta com 5% de erro de logica




