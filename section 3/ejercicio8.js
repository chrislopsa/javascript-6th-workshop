function crearContador(){
    let contador=0
    let flag = true

    function incrementar(){
        contador += 1
        return contador
    }
    while(flag){ 
        const userInput = prompt(`Contador : ${contador}\nPresiona Aceptar para incrementar el contador`)
        if (userInput === ""){
            incrementar()
        }
        else{
            console.log(contador)
            flag = false
        }
    }
}
crearContador();

