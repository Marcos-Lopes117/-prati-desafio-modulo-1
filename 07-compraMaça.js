const prompt = require('prompt-sync')();
/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite um valor referente a quantidade de maçãs a ser comprada e aperte ENTER no terminal 
você receberá o valor total da compra via terminal */ 
console.log("verifica compras.")
let quantidade = prompt('Digite a quantidade de maças que deseja comprar:')
let resultado

if (quantidade < 12) {
    resultado = quantidade * 0.30
    console.log("sua compra de" + quantidade + "maçãs, vai custar: " + resultado)
}
else if (quantidade >= 12) {
    resultado = quantidade * 0.25
    console.log("sua compra de" + quantidade + "maçãs, vai custar: " + resultado)
}

else {
    console.log("Quantidade inválida")
}