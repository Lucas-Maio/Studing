// Função construra -> objetos
// Função fabrica -> objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p1 = new Pessoa('luiz', 'otávio')
const p2 = new Pessoa('lucas', 'santos')

console.log(p1.nome)