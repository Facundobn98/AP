//Hacé un programa que pida al usuario ingresar un número entero positivo y luego:

//Calcule y muestre en consola si ese número es par o impar.

//Calcule y muestre si es primo o no.

//Si el número ingresado no es válido (no es un número o es negativo o 0), que vuelva a pedirlo hasta que sea correcto.


let numero = parseInt(prompt('ingrese un numero entero positivo'))

while (isNaN(numero) || edad<=0){
    alert('no es un numero vuelve a intentarlo')
}

if (numero % 2 === 0){
    console.log(numero + "es par")
}
    else if (``) {
        console.log(numero + "no es par")
             } ;

//

//if numero es divisible por si mismo o por 1 es primo si no no es primo

let esPrimo = true;

if (numero <= 1){
    esPrimo = false;

} else {
    for (let i = 2; i < numero; i++){
        if (numero % 1 === 0 ){
          esPrimo = false;
          break;  
        }
    }
}

if (esPrimo) {
    console.log(`el numero %{numero} es primo`);

} else {
    console.log(`el numero %{numero} no es primo`);
}