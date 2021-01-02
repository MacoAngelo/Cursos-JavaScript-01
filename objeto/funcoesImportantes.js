const pessoa = {
    nome: 'Marco',
    idade: 21,
    peso: 93
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[0]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    // Define se será visualizada através ao utilizar um Object.Keys por exemplo...
    enumerable: true,
    // Define se será possível editar o valor da propriedade...
    writable: false,
    // Seta o valor em sí...
    value: '26/08/1998'
})

pessoa.dataNascimento = '27/08/1998'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMA 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
console.log(dest)