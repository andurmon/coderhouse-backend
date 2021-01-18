// Se declara el Texto que se usará como una constante
const texto1 = "1. Hola como estan todos ustedes el dia de hoy?";
const texto2 = "2. Muy bien gracias de preguntar";
const texto3 = "3. Yo bien gracias por no preguntar";

// Callback Hell con tres callbacks anidados
recorrerTexto(texto1, (params)=>{
    recorrerTexto(texto2, (params)=>{
        recorrerTexto(texto3, (params)=> console.log(`[SUCCESS] - Proceso Completo ${params} palabras en total`), params)
    }, params, 250)
}, 0, 500)


// Funcion recorrer texto que corre de manera asincronica
function recorrerTexto(texto, callback, params, time_ms=1000){
    
    let splittedText = texto.split(' '); //Se separa por espacios
    let numWords = splittedText.length;
    let index = 0;

    let intervalId = setInterval(()=>{
        console.log(splittedText[index]); // Imprime una palabra
        index++;

        if(index === numWords){
            clearInterval(intervalId)
            endMessage(numWords, time_ms)
            callback(params+numWords)
        }
    }, time_ms)
    return numWords
}

//Funcion que llamo cada que termina de imrpimir un texto
function endMessage(numWords, delay_ms){
    console.log(`[SUCCESS] - Se imprimieron ${numWords} palabras con un retardo de ${delay_ms/1000} segundos entre sí`);
}