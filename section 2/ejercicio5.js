//promises and callbacks

function manejarAsincronia(callback, promise){
     promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve(callback()), 2000);
    })   
}

manejarAsincronia(callback)

function callback(){
    console.log("¡Promesa cumplida y callback ejecutado!")
}

  