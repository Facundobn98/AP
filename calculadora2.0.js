function calcular(numero1,numero2,operacion){
    if (operacion === '+'){
        return numero1 + numero2;
        
    }
    else if(operacion === '-'){
        return numero1 - numero2;
    }
    else if(operacion === '/'){
        if (numero2 === 0){
            return 'error no se puede dividir por 0'
        }
        return numero1 / numero2;
    }
    else if(operacion === '*'){
        return numero1 * numero2
    }
}

let continuar = true;

while(continuar){
    let numero1 = parseFloat(prompt('ingrese el primer numero: '));
    if (isNaN(numero1)) break;
    let numero2 = parseFloat(prompt('escribe el segundo numero: '));
    if (isNaN(numero2)) break;
    let operacion = prompt('ingrese la operacion: + , - , / ,*')
    let resultado = calcular(numero1,numero2,operacion);

    console.log(`resultado: ${resultado}`)

    let respuesta = prompt('Queres hacer otro calculo?(si/no)').toLowerCase();

    if (respuesta !== 'si' ){
        continuar = false;
    }
}