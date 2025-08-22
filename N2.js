//Próximos ejercicios (para seguir subiendo de nivel):

//1)Máximo y mínimo
//Función que reciba un array de números y devuelva el mayor y el menor.

function calculo(numeros) {
  let numeroMax = Math.max(...numeros);
  let numeroMin = Math.min(...numeros);
  let numeroDif = numeroMax - numeroMin;
  console.log(`el numero mas grande es ${numeroMax} y el numero mas chico es ${numeroMin} y la diferencia es ${numeroDif}`
  );
}

calculo([99,10,20,99]);

// uso de spread y rest 
// combina dos arrays usando ...

let nombres = ['facundo','arie;']
let apellidos = ['ruiz','brun']

let nombreCompleto = [...nombres,...apellidos]

console.log(...nombreCompleto)


//combinando objetos

let persona = {nombre:'facundo', edad:27 };

let datosExtras = {ciudad:'buenos aires', hobby:'programar'}

let datosCompletos = {...persona,...datosExtras}

console.log(datosCompletos)

//funcion que reciba cualquier cantidad de numeros y devuelva la suma

function sumar(numeros){
     let suma = numeros.reduce((acc,n) => acc + n,0)
     return (`la suma total es ${suma}`)
}

console.log(sumar([1,2,3,4]))
console.log(sumar([99,29,99,2999,29]))
