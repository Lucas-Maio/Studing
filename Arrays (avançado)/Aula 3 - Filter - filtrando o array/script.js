const num = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 16, 22, 30]
const numFilter = num.filter(valor => valor > 10);
console.log(numFilter);


const pessoas = [
    { nome: 'luiz', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'letícia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
]
const pessoasComNomeGrande = pessoas.filter(Object => Object.nome.length >=5)
console.log(pessoasComNomeGrande)

const pessoascomMaisDeCinquentaAnos = pessoas.filter(Object => Object.idade >50)
console.log(pessoascomMaisDeCinquentaAnos)

const nomeTerminaComA = pessoas.filter(Object => Object.nome.toLocaleLowerCase().endsWith('a'))
console.log(nomeTerminaComA)
