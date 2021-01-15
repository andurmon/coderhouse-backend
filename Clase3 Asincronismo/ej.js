const fun = () => console.log("Termino!")
let i=0;
let intervalId;

function cuente(myString){
  console.log(myString[i]);
  i++;
  if(i === myString.length){
    clearInterval(intervalId)
  }
}

function mostrarLetras(myString){
  intervalId = setInterval(()=>cuente(myString), 1000)
}

mostrarLetras("Andres")