
// Neste problema, você deverá ler 3 
// palavras que definem o tipo de animal possível segundo o 
// esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
// Entrada
// A entrada contém 3 palavras, uma em cada linha, 
// necessárias para identificar o animal segundo a figura acima, 
// com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

if (String(lines[0]) === 'vertebrado') {
    if (String(lines[1]) === 'ave') {
        if (String(lines[2]) === 'carnivoro') {
            console.log('aguia')
        } else {
            console.log('pomba')
        }

    } else if (String(lines[2]) == 'onivoro') {
        console.log('homem')
    } else {
        console.log('vaca')
    }
} else if (String(lines[1]) === 'inseto') {
    if (String(lines[2]) === 'hematofago') {
        console.log('pulga')
    } else {
        console.log('lagarta')
    }


} else if (String(lines[2]) === 'hematofago') {
    console.log('sanguessuga')

} else { console.log('minhoca') }


// tempo 40 minutos e ainda a Uri não aceitou

