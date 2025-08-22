// recorrer un arrays y sumar todos los numeros mayores o igual a 4

let numeros = [4,5,6,78,9,0,-1];
let suma = 0

numeros.forEach(function(n){
  if(n >= 4){
   suma += n
  }
})
  console.log(suma)
// sumar solo numeros positivos 

let numerosP = [11,22,30,4,-1,-2,-3,-4,-10000000]
let sumaPositivos = 0

numerosP.forEach(function(n){
  if (n >= 0)
  sumaPositivos += n
})

console.log(sumaPositivos)
// filtrar palabras largas e imprimirlas

let palabras = ["sol", "universidad", "casa", "programación"];
let palabrasLargas = '';


palabras.forEach(function(n){
    if (n == '....')
        palabrasLargas += n
    })
console.log(palabrasLargas.trim());
//.trim() elimina el espacio extra del final

//quitar espacios que no van y contador de palabras
let palabras = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
let conteo = 0 ;
let totalPalabras = palabras.trim()
let cantidad = totalPalabras.split(' ')
cantidad.forEach(function(n){
    if (n !== ''){
        conteo += 1
    }
})
console.log(conteo)



//Ejercicio 3: Multiplicar elementos
//Dado un array de números, crear un nuevo array con cada número multiplicado por 3.
//Ejemplo: [1, 2, 3] → nuevo array: [3, 6, 9].





//Ejercicio 4: Contar elementos
//Dado un array de números, contar cuántos son mayores a 10.
//Ejemplo: [4, 12, 15, 3, 7] → resultado: 2.


//Ejercicio 5: Mensajes personalizados
//Dado un array de nombres, imprimir un mensaje para cada uno: "Hola, [nombre]!".
//Ejemplo: ["Ana", "Pedro", "Luis"] → imprime: