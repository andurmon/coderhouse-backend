// Se declara el Texto que se usará como una constante
const texto = "Hola como estan todos ustedes el dia de hoy?";

// Callback Hell con tres callbacks anidados
recorrerTexto(texto, ()=>{
    recorrerTexto("Pues hombre muy bien la verdad", ()=>{
        recorrerTexto("Mil gracias que tengas buen día!", ()=> console.log("[SUCCESS] - Proceso Completo"))
    },250)
}, 500)


// Funcion recorrer texto que corre de manera asincronica
function recorrerTexto(texto, cb, time_ms=1000){
    
    let splittedText = texto.split(' ');
    let numWords = splittedText.length;
    let index = 0;

    let intervalId = setInterval(()=>{
        console.log(splittedText[index]); // Imprime una palabra
        index++;

        if(index === numWords){
            clearInterval(intervalId)
            endMessage(numWords, time_ms)
            cb()
        }
    }, time_ms)
}

//Funcion que llamo cada que termina de imrpimir un texto
function endMessage(numWords, delay_ms){
    console.log(`[SUCCESS] - Termino la ejecución!, se imprimieron ${numWords} palabras con un retardo de ${delay_ms/1000} segundos entre sí`);
}