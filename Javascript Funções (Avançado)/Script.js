// Declaraçãod e função (function hoisting)
A();
function A() {
    console.log('A1');
}

// First-class objects ( Objetos de primeira classe)
const a2 = function() {
    console.log('a')
};
a2();

// Arrow function 
const arrowF = () => {
    console.log('Arrow function');
}
arrowF()


// Dentro de um objeto
 const obj = {
    a: function() {
        console.log('a')
    }
 };
 obj.a();