const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi, e minha idade atual é ${this.idade}`)
    },
    incrementaIdade() {
        this.idade++
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa1 = criaPessoa('v', 'v', 23)
*/



/*
const pessoa1 = {
    nome: 'V',
    sobrenome: 'v',
    idade: 23
};

console.log(pessoa1) */