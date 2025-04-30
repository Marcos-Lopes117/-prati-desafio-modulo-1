const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
digite um número no terminal e aperte ENTER 
o terminal entregará a tabuada do algarismo escolhido digitados*/ 

console.log("Gerador de tabuada.")
let novoNumero = prompt('Digite o numero desejado:')
    
for ( var i = 1; i <= 10; i++ ) {
    console.log(novoNumero , "x" , i , " = ",novoNumero * i )
}
 