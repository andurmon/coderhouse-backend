// Realizaremos una función que nos devuelva números aleatorios entre un mínimo y 
// un máximo configurable y que muestre la cantidad de valores que vamos solicitando junto a la fecha y hora del pedido.

// El retorno será un objeto con el siguiente formato:  
// {orden: 1, número: 5, fyh: dd/mm/yy hh:mm:ss}

// Aclaracion: No se pueden usar variables globales ni closures para mantener el contador.



// Iterador hecho a mano , que es capaz de guardar el estado de las variables hasta
// que se llame al metodo next()
function randonNum(min, max, numIter){
    let index = 0;

    return {
        next: function(){
            return index < numIter ?{ 
                value:{
                    orden: index ++,
                    number: Math.random() * (max-min) + min,
                    date: new Date()
                },
                done: false
            } :
            { done: true}
        }
    }
}

// let x = randonNum(1, 10, 2)

// console.log(x.next());
// console.log(x.next());
// console.log(x.next());


// Iterador hecho con yield que llego con la aparicion de ES6 en escena
function*  randonNum2(min, max, numIter){
    let index = 0;

    while(index < numIter){
        yield{
            orden: index ++,
            number: Math.random() * (max-min) + min,
            date: new Date()
        }
    }
}

let x = randonNum2(1, 10, 2)

console.log(x.next());
console.log(x.next());
console.log(x.next());