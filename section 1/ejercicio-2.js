const str= `
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);
// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());
// vars declaration
var a = 1;
let b = 2;
const c = 3;
// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`

alert(`Quiz de Hoisting en Javascript.\nDale un vistazo al siguiente código:\n\n${str}`);
prompt("¿como crees que resultara la ejecucíon de este código:")

// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("la primera ejecución del: 'console.log('Valor de a:', a) se ejecutara sin problema debido al HOISTING que (eleva) la variable hasta el tope de su contexto de ejecución");
console.log("la segunda y tercera linea: 'console.log('Valor de b:', b) y 'console.log('Valor de c:', c) no se ejecutaran y daran un error de referencia: Cannot access 'b' before initialization. Esto quiere decir que las variables declaradas con 'let' y 'const' no pueden ser accedidas antes de su declaración.")
console.log("la ejecución del: console.log('Resultado de funcionDeclarada:', funcionDeclarada()); se ejecutara sin problema debido a que estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.");
console.log("la ejecución del: console.log('Resultado de funcionExpresada:', funcionExpresada()); no se ejecutara y resultara en un error: 'Cannot access 'funcionExpresada' before initialization' debido a que estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.");
