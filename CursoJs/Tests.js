const nome = 'Lucas';
const sobrenome = 'Santos';
const idade = 23
const peso = 84
const altura = 1.72
let imc; // peso / (altura * altura)
let anoNascimento; 

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)