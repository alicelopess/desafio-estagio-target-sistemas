/* 

TASK 004:

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
• SP – R$67.836,43 
• RJ – R$36.678,66 
• MG – R$29.229,88 
• ES – R$27.165,48 
• Outros – R$19.849,53 

Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora.

*/

const faturamentoMensalPorEstado = [
    { estado: 'SP', faturamento: 67836.43, },
    { estado: 'RJ', faturamento: 36678.66, },
    { estado: 'MG', faturamento: 29229.88, },
    { estado: 'ES', faturamento: 27165.48, },
    { estado: 'Outros', faturamento: 19849.53, }
]

const faturamentoMensalTotal = faturamentoMensalPorEstado.reduce((acc, item) => {
    return acc + item.faturamento
}, 0)

faturamentoMensalPorEstado.forEach((estado) => {
    const percentual = (estado.faturamento / faturamentoMensalTotal) * 100
    console.log(`${estado.estado}: ${percentual.toFixed(2)}%`)
})