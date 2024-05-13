
function crearSumador(num){
    return function sumador (num1){
       return num + num1
    }
}

let sumarCinco = crearSumador(5)
console.log(sumarCinco(3))
console.log(sumarCinco(7))