/*
// argummentos que sustenta todos os argumentos enviados
function funcao(a, b, c) {
    //console.log('Olá')
    //console.log(arguments);
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6)
//funcao('iae');

*/

/*

function funcao2({ nome, sobrenome , idade}) {
    console.log(nome, sobrenome, idade);
}
funcao2({ nome: 'Lucas', sobrenome: 'Santos', idade: 23})

*/


function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador ,numeros);
    for(let numero of numeros){
       if (operador === '+') acumulador += numero
       if (operador === '-') acumulador -= numero
       if (operador === '/') acumulador /= numero
       if (operador === '*') acumulador *= numero
    }
    console.log(acumulador);
}
conta ('-', 0, 20, 30, 40, 50)