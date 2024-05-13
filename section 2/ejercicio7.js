const str = `Consiera el siguiente código y digita los numeros de cada linea en el orden que creas que se imprimiran en la consola:
            
            console.log("Inicio del script");    <=linea 1

            setTimeout(() => {
                console.log("Primer setTimeout");  <=linea 2
            }, 0);

            setTimeout(() => {
            console.log("Segundo setTimeout");   <=linea 3
            }, 0);

            Promise.resolve("Promesa resuelta").then(console.log);     <=linea 4

            console.log("Fin del script");       <=linea 5` 


const ordenIngreasado = prompt(str)

function mostrarOrdenReal(){

console.log("Orden Real:")
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
}

if(ordenIngreasado==="15423"){
  console.log("Excelente, tiene claro el event loop en JS.")
}
else{
  console.log("Te equivocaste, recuerda que los 'setTimeout' son macrotareas y siempre se ejecutan despues de TODAS las tareas de JS(console.log) y las microtareas(promesas) ")
}


