

//Imprime en consola:

//Todos los números

let numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros)

//La suma de los número

let datosN =  [1,2,3,4]
let total;

for (let i = 0;i < datosN.length; i++){
    total = datosN[i];
}
console.log(total);

//El promedio

function promedio(notas) {
  sumatotal = 0;
  for (let i = 0; i < notas.length; i++) {
    sumatotal += notas[i];
  }
  return sumatotal / notas.length;
}

//console.log(promedio([10]));

let promedioNotas = promedio([10,2,3,4])

console.log(promedioNotas)


if (promedioNotas >= 6){
  console.log(`estas aprobado con ${promedioNotas}`)

}
else {
    console.log(`estas desaprobado con ${promedioNotas}`)
}
