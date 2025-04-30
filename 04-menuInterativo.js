const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite um valor referente a escolha feita e aperte ENTER no terminal */

let resposta
console.log("Escolha a opção desejada.")
resposta = prompt('[1] para atendimento , [2] para consulta , [3] para sair');

if (resposta == 1 || resposta == 2 || resposta == 3) {
    switch (resposta) {

        case "1": {
            console.log("Você escolheu a opção de atendimento.")
            break
        }
        case "2": {
            console.log("Você escolheu a opção de consulta.")
            break
        }
        case "3": {
            console.log("saindo.")
            break
        }
    }
}
else { console.log("resposta inválida") }