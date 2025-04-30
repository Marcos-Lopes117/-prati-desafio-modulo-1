const prompt = require('prompt-sync')();

/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
Digite o primeiro lado do triangulo e aperte ENTER no terminal
Digite o segundo lado do triangulo e aperte ENTER no terminal
Digite o terceiro lado do triangulo e aperte ENTER no terminal

e você recebera a resposta do tipo de triângulo formado via terminal
*/

console.log("Verificador de Triângulos.")

let lado1 = parseFloat(prompt('Digite o 1º lado do triângulo:'))
let lado2 = parseFloat(prompt('Digite o 2º lado do triângulo:'))
let lado3 = parseFloat(prompt('Digite o 3º lado do triângulo:'))

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero") // Todos os lados iguais
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles"); // Dois lados iguais
  } else {
    console.log("Escaleno"); // Todos os lados diferentes
  }

/* 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/