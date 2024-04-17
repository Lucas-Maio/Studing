// factory functions
function criaPessoa(nome, sobrenome, altura, peso ) {
    return {
        nome,
        sobrenome,

        // getter
        get nomecompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala: function(assunto = 'falando de js') {
            return `${this.nome} está ${assunto}.`
        },

        altura: altura,
        peso: peso,

        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Lucas', 'Santos', 1.8 , 60)
p1.nomeCompleto = 'Vicente souza oliveira'
console.log(p1.nome, p1.sobrenome, p1.imc())
console.log(p1.fala())

