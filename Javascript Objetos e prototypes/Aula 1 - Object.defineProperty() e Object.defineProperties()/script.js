function Produto(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: true, // mostra o valor
        writable: true, // pode alterar o valor
        configurable: true // pode alterar o objeto
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // mostra o valor
            writable: true, // pode alterar o valor
            configurable: true // pode alterar o objeto
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // mostra o valor
            writable: true, // pode alterar o valor
            configurable: true // pode alterar o objeto
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log((p1))