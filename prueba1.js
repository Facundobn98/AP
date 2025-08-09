let nombre = prompt('ingrese su nombre')
let edad = parseInt(prompt('ingrese su edad'))


while (isNaN(edad) || edad<=0){
    edad = parseInt(prompt('edad invalida , por favor vuelva a intentarlo'))
};
if (edad < 18){
    console.log(`Hola ${nombre}, sos menor de edad.`);}
    else if (edad >= 18 && edad <= 60){
        console.log(`hola ${nombre}, sos un adulto`)}
    else if (edad > 60){
        console.log(`hola ${nombre}, sos un adulto mayor`)
    }

// isNaN significa is not a number , que quiere decir que no es numero 

// parseInt , significa que pasas de un string (texto) a numero 

// || significa o (o) se puede usar como edad <=18 ||(o) edad edad >= 60