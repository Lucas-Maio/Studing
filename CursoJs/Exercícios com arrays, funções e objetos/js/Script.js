
function meuEscopo() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res')
    const pessoas = []
    
    //    form.onsubmit = function(evento) {
    //        evento.preventDefault();
    //        alert('ola');
    //        console.log("foi enviado");
    //    };
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        res.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
         `${peso.value} ${altura.value}`
    }
    form.addEventListener('submit', recebeEventoForm);
    
        
    

};
meuEscopo();
