const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite um valor e aperte ENTER no terminal */ 
let numero = prompt('digite um valor: ');

if (numero % 2 == 0)
    console.log("Numero par")
else
    console.log("Numero impar")
