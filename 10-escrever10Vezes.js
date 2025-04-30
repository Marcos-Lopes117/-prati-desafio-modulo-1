const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
digite um numero no terminal e aperte ENTER que será exibido 10 vezes no terminal */ 

let numero = prompt('Digite um número para ser repetido 10 vezes:')


for (var i = 10; i >= 1; i--) {
    console.log(numero);
}
 