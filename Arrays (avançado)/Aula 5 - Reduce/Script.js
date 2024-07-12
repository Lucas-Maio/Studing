const num = [5,50,80,1,2,3,4,5,6,7,11,15,12,22]
const total = num.reduce(function(acumulador, valor, indice, array) {
if(valor % 2 === 0) acumulador.push(valor)
    return acumulador;
}, [])
console.log(total)
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 77},
]
const maisVelha = pessoas.reduce(function(acumulador, valor, indice, array) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha)