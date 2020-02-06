const imprimirOperacoes = (a, b) => {
    return {
        soma: a + b,
        subtracao: a - b,
        mmultiplicacao: a * b,
        divisao: a / b
    }
}

console.log(imprimirOperacoes(1010, 326))