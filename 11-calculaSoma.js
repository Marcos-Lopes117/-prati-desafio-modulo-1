const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
digite os numeros no terminal e aperte ENTER 
o terminal entregará a soma dos algarismos digitados*/ 

let numero = []
let resultado = 0
let novoNumero
let contador = 1

for ( var i = 0; i < 5; i++ ) {
    novoNumero = prompt('Digite o ' + contador + 'º número a ser somado:')
    numero.push(novoNumero)
    resultado = resultado + parseInt(numero[i])
    contador+= 1
}
 
console.log(resultado);