const prompt = require('prompt-sync')();

/*  retire dos comentátios para executar */

/* 01 exercicio */

let numero = prompt('digite um valor: ');

if (numero % 2 == 0)
    console.log("Numero par")
else
    console.log("Numero impar")

/*  02

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

*/

/*  03

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

*/

/*  04


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

*/

/*  05


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

*/

/* 06


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


*/

/* 07

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

*/

/* 08

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


*/

/* 09

for (var i = 10; i >= 1; i--) {
    console.log(i);
  }

*/

/* 10


let numero = prompt('Digite um número para ser repetido 10 vezes:')


for (var i = 10; i >= 1; i--) {
    console.log(numero);
}
 

*/

/* 11


let numero = []
let resultado = 0
let novoNumero
let contador = 1

for ( var i = 0; i < 5; i++ ) {
    novoNumero = prompt('Digite o ' + contador + 'º número a ser somado:')
    numero.push(novoNumero)
    resultado = resultado + parseInt(numero[i])
    contador+= 1
}
 
console.log(resultado);

*/

/* 12

console.log("Gerador de tabuada.")
let novoNumero = prompt('Digite o numero desejado:')
    
for ( var i = 1; i <= 10; i++ ) {
    console.log(novoNumero , "x" , i , " = ",novoNumero * i )
}

*/

/* 13

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

*/

/* 14

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

*/

/* 15


    let a = 0;
    let b = 1;
    let resultado = 0;
    console.log("sequencia fibonacci de 10 algaritmos")
    console.log(b)

    for (let i = 2; i <= 10; i++) {
      resultado = a + b;
      a = b;
      b = resultado;
      console.log(resultado) 
    }

*/