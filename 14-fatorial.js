const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
digite um número no terminal e aperte ENTER
o terminal entregará o fatorial do número digitado*/ 

let numero = parseInt(prompt('Digite o número a ser fatorado:'))
let resultado = 0

    if (numero === 0 || numero === 1)
      console.log("Fatorial = 1")
    else{
        for (var i = numero - 1; i >= 1; i--) {
        numero *= i;
        }
        console.log("Fatorial = ", numero)
    }

 
