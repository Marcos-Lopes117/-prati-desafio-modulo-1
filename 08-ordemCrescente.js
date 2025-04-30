const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite dois valores para ordenar de forma crescente via terminal */ 

console.log("Ordenador crescente de 2 valores.")
let num1 = prompt('Digite o primeiro valor:')
let num2 = prompt('Digite o segundo valor:')
if(num1===num2){
    console.log("valores iguais")
}
else if(num1 > num2){
    console.log("1º: " + num2)
    console.log("2º: " + num1)
}
else{
    console.log("1º: " + num1)
    console.log("2º: " + num2)
}
