/* 

TASK 003:

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;

*/

const fs = require('node:fs')
const dados = fs.readFileSync('dados.json', 'utf8')
const faturamento = JSON.parse(dados)

function formatNumber(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

const faturamentoLimpo = faturamento.filter((dia) => dia.valor !== 0)

const faturamentoOrdenado = faturamentoLimpo.sort((a, b) => a.valor - b.valor)
console.log(`O menor valor de faturamento ocorrido em um dia do mês é: ${formatNumber(faturamentoOrdenado[0].valor)}`)
console.log(`O maior valor de faturamento ocorrido em um dia do mês é: ${formatNumber(faturamentoOrdenado[faturamentoOrdenado.length - 1].valor)}`)

function calcularMediaMensal(valor) {
    const faturamentoTotal = valor.reduce((acc, item) => {
        return acc + item.valor
    }, 0)
    return faturamentoTotal / valor.length
}
const mediaMensal = calcularMediaMensal(faturamentoLimpo)

const faturamentoMaiorQueMedia = faturamentoLimpo.filter((dia) => dia.valor > mediaMensal)
console.log(`O número de dias no mês em que o valor do faturamento diário foi superior à média mensal é: ${faturamentoMaiorQueMedia.length}`)






