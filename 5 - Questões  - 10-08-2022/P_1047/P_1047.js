// Leia a hora inicial, minuto inicial, 
// hora final e minuto final de um jogo. 
// A seguir calcule a duração do jogo.

// Obs: O jogo tem duração mínima de um (1) 
// minuto e duração máxima de 24 horas.

// Entrada
// Quatro números inteiros representando a 
// hora de início e fim do jogo.

// Saída
// Mostre a seguinte mensagem: 
// “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .


var input = require('fs').readFileSync('stdin', 'utf8');

var [hInicial, mIncial, hFinal, mFinal] = input.split(" ").map(item => parseFloat(item));

let Htotal = 0
let Mtotal = 0

if (hInicial < hFinal && mIncial < mFinal) {
    Htotal = hFinal - hInicial
    Mtotal = mFinal - mIncial
}
if (hInicial > hFinal && mIncial > mFinal) {
    Htotal = (24 - hInicial) + hFinal;
    Mtotal = mIncial - mFinal
}
if (hInicial > hFinal && mIncial < mFinal) {
    Htotal = (24 - hInicial) + hFinal;
    Mtotal = mFinal - mIncial
}
if (hInicial < hFinal && mIncial > mFinal) {
    Htotal = ((hFinal * 60 ) - (hInicial * 60)) - 60
    Mtotal = mFinal - mIncial + 60


}if (hInicial === hFinal && mIncial == mFinal) {
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`)
}else{
    console.log(`O JOGO DUROU ${Htotal} HORA(S) E ${Mtotal} MINUTO(S)`)
}


