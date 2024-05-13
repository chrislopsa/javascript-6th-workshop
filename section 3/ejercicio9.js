
let userInput;

function tareaAsincrona(){
    return new Promise((resolve,reject)=>{
        
        userInput = prompt("Ingresa la cantidad de segundos para que aparezca el mensaje:")
        setTimeout(()=>{
            if (!isNaN(userInput)){
                resolve(userInput)     
            }else{
                reject("Error, no ingresaste un valor válido.")
            } 
        },userInput*1000)
           
    })
}
function loadingData(url){
    return fetch(url)
    .then(response => response.json())  
}
         


tareaAsincrona()
    .then(userInput=>{
        return loadingData('https://jsonplaceholder.typicode.com/posts')
    })
    .then(data => {
        data.forEach(element => {
            console.log(element.title)
            console.log(element.id)
    })})

    

