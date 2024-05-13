
console.log("Mensaje 1: Inmediatamente")

setTimeout(()=> console.log("Mensaje 2: Con timeout de 0 segundos"),0)
setTimeout(()=> console.log("Mensaje 3: Con timeout de 1 segundo"),1000)

//el código se ejecuta de arriba hacia abajo como veniamos aprendiendo hasta ahora y la ejecución del 'console.log()' de la linea 5 tarda un segundo en darse.

//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? - ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

//en realidad si se muestra inmediatamente, si cambiramos el orden de nuestro código escribiendo antes el 'setTimeout' de 0 ms que el primer console.log veriamos que se ejecuta primero el console.log debido al event loop y la cola de tareas, un console.log es una tarea de JS, mientras que los setTimeOut son webAPIs que el se toman como microtareas, y estas ultimas solo inician su ejecución una vez hallan finalizado todas las tareas o macrotareas del script. o otra manera de entenderlo es que un setTimeOut es una función asíncrona y el console.log es síncrona, la teoria dice que primero se ejecutan las tareas síncronas antes de las tareas asíncronas.