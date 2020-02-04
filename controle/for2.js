const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Marco',
    sobrenome: 'Antonio',
    idade: 21,
    peso: 92
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}