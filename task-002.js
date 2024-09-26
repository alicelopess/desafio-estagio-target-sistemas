/* 

TASK 002 -

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 
2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem 
que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma 
mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou 
pode ser previamente definido no código; 

*/

function checkIfNumberBelongsToFibonacci(numberToCheck) {
    let FIBONACCI = [0, 1]

    while (FIBONACCI[FIBONACCI.length - 1] < numberToCheck) {
        let lastValue = FIBONACCI[FIBONACCI.length - 1]
        let nextValue = lastValue + FIBONACCI[FIBONACCI.length - 2]

        FIBONACCI.push(nextValue)
    }

    if (FIBONACCI.includes(numberToCheck)){
        console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci: ${FIBONACCI}`)
    } else {
        console.log(`O número ${numberToCheck} não pertence à sequência de Fibonacci: ${FIBONACCI}`)
    }
}

let NUMBER_TO_CHECK = 12 
checkIfNumberBelongsToFibonacci(NUMBER_TO_CHECK)

