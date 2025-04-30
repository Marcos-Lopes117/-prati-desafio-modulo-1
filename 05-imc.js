const prompt = require('prompt-sync')();


/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite o valor da altura e aperte ENTER no terminal
digite o valor do peso e aperte ENTER no terminal 
e você receberá o índice de massa corporal referente aos seus dados*/

console.log("Cálculo de IMC")
let altura = parseFloat(prompt('Digite sua altura:  ex. 1.70, 1.80'));
let peso = parseFloat(prompt('Digite seu peso:  ex. 59.7 , 90.35'))
let result

const imc = calcularIMC(peso, altura);

if (imc < 18.5) {
    console.log("Abaixo do peso")
}
else if (imc > 18.5 && imc <= 24.9) {
    console.log("Peso ideal")
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso")
}
else {
    if (imc >= 30) {
        console.log("Obesidade")
    }
    else {
        console.log("informações inválidas")
    }
}

function calcularIMC(peso, altura) {
    result = peso / (altura * altura);
    console.log("IMC = ", result.toFixed(2))
    return result
}


/*
  Classificação do IMC:
  Abaixo do peso: IMC < 18,5.
  Peso ideal: 18,5 ≤ IMC ≤ 24,9.
  Sobrepeso: 25 ≤ IMC ≤ 29,9.
  Obesidade: IMC ≥ 30. 
*/