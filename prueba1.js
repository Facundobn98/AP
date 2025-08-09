let nombre = prompt('ingrese su nombre')
let edad = parseInt(prompt('ingrese su edad'))



if (edad < 18){
    console.log(`Hola ${nombre}, sos menor de edad.`);}
    else if (edad >= 18 && edad <= 60){
        console.log('hola , sos un adulto')}
    else if (edad > 60){
        console.log('sos un adulto mayor')
    }

