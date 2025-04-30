const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
digite um número no terminal e aperte ENTER
digire 0 e aperte ENTER para encerrar 
o terminal entregará a a média aritimética dos números digitados*/ 

console.log("Média aritimética de decimais.")

let decimal 
let contador = 0
let media
let total = 0

while(decimal != 0){
decimal = prompt('Digite cada decimal a tirar a média aritimética ou digite 0 para sair:')
    if(decimal != 0){
        total += parseInt(decimal)
        contador++
    }

}
 media = total/contador
 console.log("Total das somas:" , total , "/ quantidade de numeros:", contador ) 
 console.log("Média aritimética = " , media)