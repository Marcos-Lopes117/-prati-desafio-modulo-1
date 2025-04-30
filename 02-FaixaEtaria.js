const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite o valor referente a uma idade e aperte ENTER no terminal 
os valores de referência são:
infantil (0-12 anos), adolescente (13-17 anos), adulto (18-64 anos) e idoso (65+ anos) */

let idade
console.log("Verificador de faixa etária.")

idade = parseInt(prompt('Digite sua idade para verificar sua faixa etária:'))

if (idade >= 0 && idade <= 12) {
    console.log("infantil")
}
else if (idade > 12 && idade <= 17) {
    console.log("adolescente")
}
else if (idade > 17 && idade <= 64) {
    console.log("adulto")
}
else {
    if (idade < 0) { console.log("idade inválida") }
    else { console.log("idoso") }
}