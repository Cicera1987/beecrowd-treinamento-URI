var input = require('fs').readFileSync('stdin', 'utf8');

let teste = input.split("\n")

let qtd = teste[0].split(' ').map(item => parseFloat(item))
let coelhos = teste[1].substring(2)
let ratos = teste[2].substring(2)
let sapos = teste[3].substring(2)
console.log(coelhos)
let total = 0
for(i = 0; i < qtd; i++){
    switch(teste){
        case 'C':
            coelhos = teste[1] * qtd
            break
        case 'R':
            ratos * qtd;
            break
        case 'S':
            sapos * qtd;
            break
    }
    total = qtd *100;

}
console.log(`Total: ${qtd} cobaias`)
console.log(`Total de coelhos ${coelhos}`)
console.log(`Total de ratos ${ratos}`)
console.log(`Total de sapos ${sapos}`)
console.log(`Percentual de coelhos ${total}`)
console.log(`Percentual de ratos ${total}`)
console.log(`Percentual de sapos ${total}`)


