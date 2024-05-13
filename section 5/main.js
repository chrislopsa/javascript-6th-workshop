async function loadFile() {
    try {
        const response = await fetch("section 5/data.json");
        if (!response.ok) {
            throw new Error("Error al cargar los datos.");
        }
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(`Algo ocurrió durante la recolección de archivos, ${error.message}-`);
    }
}


const data = await loadFile();
let flag = true;
let availableRooms = [];
let bookingList = [];
let id=0;
while (flag) {

    let option = validateOptions("12345", "Ingresa el numero correspondiente a la opcion deseada:\n\n1. Hacer una reserva\n2. Ver reservas actuales\n3.Cancelar reserva\n4.Editar reserva\n5.Salir")

    switch (option) {
        case '5':
            flag = false;
            break;

        case '1':
            createBooking(data, availableRooms);
            break;
        
        case '2':
            showBookings(bookingList);
            break;

        case '3':
            bookingList = cancelBooking(bookingList, data);
            break;
        
        case '4':
            editBooking(bookingList);
            break;
    }
}



function createBooking(data, array) {
    
    const numberOfPersons = Number(validateOptions("123456", "Ingresa el número de personas(máximo 6):"))
    array = data.rooms.filter(room =>
        room.roomTypeId >= numberOfPersons && room.availability === true);
       
    if(array.length){
        showAvailableRooms(array)
        
        let reservedRoom, roomNumber;
        do{
            roomNumber = Number(validateIsNumber("Ingresa el número de la habitación que deseas reservar:"))
            reservedRoom = array.find(room => roomNumber === room.number)
            if(reservedRoom){

                let customer = prompt("Ingresa un nombre para la reservación:").toUpperCase();

                let startDate = validateDateInput("Ingresa la fecha de inicio de la reserva en el formato: 'DD/MM/YYYY':")
                let endDate = validateDateInput("Ingresa la fecha de terminación de la reserva en el formato: 'DD/MM/YYYY':")

                let newBooking={
                    id: ++id,
                    roomNumber,
                    customer,
                    startDate,
                    endDate
                }
                bookingList.push(newBooking)
              
                alert("Reserva realizada con exito.")

                reservedRoom.availability = false;
            }else{
                alert("Número de habitación no encontrado.");
            }
        }while(!reservedRoom)       
    }else{
        alert("Lo sentimos, no tenemos habitaciones disponibles con esa capacidad.")
    }
    
}
function showBookings(array){
    let showRooms = "";  
    array.forEach(obj => {
        showRooms += `------------\nId: ${obj.id}\nNumero de Habitación: ${obj.roomNumber}\nA nombre de: ${obj.customer}\nFecha de inicio: ${obj.startDate}\nFecha de fin: ${obj.endDate}\n`
    })
    console.log("Habitaciones Reservadas:\n\n");
    console.log(showRooms)
}
function showAvailableRooms(array) {
    let showRooms = "";
    array.forEach(obj => {
        const roomName = (data.roomTypes.find(roomType => roomType.id === obj.roomTypeId)).name
        showRooms += `------------\nNombre: ${roomName}\nNumero de Habitación: ${obj.number}\nPrecio por noche: ${obj.priceNight}\n `
    })
    console.log("Habitaciones Disponibles:\n\n");
    console.log(showRooms);
}
function cancelBooking(array,data){
    let customer, nameFound, cancelledRoom;
    do{
        customer = prompt("¿A nombre de quien está la reservación?").toUpperCase();
        nameFound = array.find(room => room.customer === customer)
        if(nameFound){
            const confirmCancellation = confirm("Deseas confirmar la cancelación")
            if(confirmCancellation){
                cancelledRoom = data.rooms.find(room => room.number === nameFound.roomNumber)
                cancelledRoom.availability = true
                return array = array.filter(room => room.customer != customer);   
        }else{
            alert("El nombre ingresado no se encuentra en la lista de reservas");
        }}
    }while(!nameFound) 
}
function editBooking(array){
    let roomToEdit, idFound, startDate, endDate;
    showBookings(array);
    do{
        roomToEdit = validateIsNumber("Cancelación de reservas\n\nIngresa el Id de la reserva que vas a editar:")
        idFound = array.find(room => room.id === roomToEdit)
        if(idFound){
            startDate = validateDateInput("Ingresa la nueva fecha de inicio de la reserva en el formato: 'DD/MM/YYYY':")
            endDate = validateDateInput("Ingresa la nueva fecha de terminación de la reserva en el formato: 'DD/MM/YYYY':")
            idFound.startDate = startDate;
            idFound.endDate = endDate;
        }else{
            alert("El número de Id no se encontró en la lista de reservas.")
        }
    }while(!idFound) 
}
function validateIsNumber(message) {
    let num;
    do {
        num = prompt(message);
        if (isNaN(num)) {
            alert("El valor ingresado no es válido, intenta de nuevo.");
        }
    } while (isNaN(num));
    return Number(num);
}
function validateOptions(options, message) {
    let option;
    do {
        option = prompt(message).toUpperCase();
        if (options.includes(option)) {
            return option;
        }
        else {
            alert("El valor ingresado no es válido, intenta de nuevo.");
        }
    } while (!options.includes(option));
}
function validateDateInput (message){
    let regexDate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    let date;
    do{
        date = prompt(message)    
        if(regexDate.test(date)){
            return date;
        }else{
            console.log("formato inválido");
        }
    }while(!regexDate.test(date)) 
}