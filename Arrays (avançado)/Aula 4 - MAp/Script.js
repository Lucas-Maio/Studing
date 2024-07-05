const num = [5,50,80,1,2,3,4,5,6,7,11,15,12,22]
const dobrar = num.map(valor => valor * 2);
//console.log(dobrar)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
const nomes = pessoas.map(obj => obj.name)
const idades = pessoas.map(obj => ({idade: obj.idade}))
const id = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj
})
console.log(pessoas)