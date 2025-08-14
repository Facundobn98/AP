function sumar(a,b){
    return(a+b)
}
function restar(a,b){
    return(a-b)
}
function dividir(a,b){
    return(a/b)
}
function multiplicar(a,b){
    return(a*b)
}
let continuar = true;
while(continuar){
    let numero1 = parseFloat(prompt('ingrese el primero numero'))
    let numero2 = parseFloat(prompt('ingrese el segundo numero'))
    let funcion = prompt('elije que funcion quiere hacer + , - , / , *')

    let resultado;


    if (funcion === '+'){
        resultado = sumar(numero1,numero2)
    }
    else if  (funcion ==='-'){
        resultado = restar(numero1,numero2)
    }
    else if (funcion === '/'){
        resultado = dividir(numero1,numero2)
    }
    else if (funcion === '*'){
        resultado = multiplicar(numero1,numero2)
    }
    else {
        resultado = "operacion invalida"
    }



console.log(`el resultado es ${resultado}`)

let respuesta = prompt('queres volver a usar la calculadora?');
if (respuesta.toLowerCase() !== 'si'){
    continuar = false;

    }

}
console.log("Gracias por usar la calculadora.");
