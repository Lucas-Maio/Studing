function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Santos')
console.log(funcao(), funcao2())