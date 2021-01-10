var valores = [true, 5, false, "hola", "adios", 2];

function elementMostCharacters(valores){
  var onlyStrings = valores.filter(valor => typeof(valor) === "string")
  
  // onlyStrings.array.forEach(element => {
  //   return 
  // });
  onlyStrings.map(element => {
    return
  })
  console.log(onlyStrings);
  return valores
}

function positionFirstFalse(valores){
  var firstFalseIndex = valores.findIndex(element => element === false)
  return firstFalseIndex
}

function operation(valores, operando){
  var onlyNumbers = valores.filter(valor => typeof(valor) === "number")
  let reducer;

  switch(operando){
    case "suma":
      reducer = (acc, value) => acc + value;
      break;
    case "resta":
      reducer = (acc, value) => acc - value;
      break;
    case "mult":
      reducer = (acc, value) => acc * value;
      break;
    case "div":
      reducer = (acc, value) => acc / value;
      break;
  }

  result = onlyNumbers.reduce(reducer)
  console.log(result);
  return valores
}

elementMostCharacters(valores)
positionFirstFalse(valores)
operation(valores, "div")

// Punto 3.
let myObj = {
  meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  mostrarMeses: function(){ this.meses.forEach(mes => console.log(mes)) } ,
  getNumeroMes: function(mes){ this.meses.findIndex(mes_element => mes_element === mes )},
  getLetrasMes: function() { return this.meses.map( mes => `${mes[0]}${mes[1]}${mes[2]}` ).join('')  }
}

console.log("Hola")