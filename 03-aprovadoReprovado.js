const prompt = require('prompt-sync')();


/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite um valor referente a uma nota aperte ENTER no terminal 
para verificar se foi aprovado ou reprovado*/

let nota
console.log("verificar aprovação.")

nota = prompt('Digite sua nota para verificar se foi aprovado:')

if (nota >= 0 && nota <= 49) {
    console.log("Reprovado")
}
else if (nota > 49 && nota <= 59) {
    console.log("Recuperação")
}

else {
    console.log("Aprovado")
}