
const PORT = process.env.PORT || 8080;
const rutaProductos = "./public/productos.txt";
const rutaVisitas = "./public/visitas.txt";

//Express
const express = require("express");
let app = express()



// File System y Random
const fs = require("fs");
const leerArchivo = ruta  => fs.promises.readFile(ruta, 'utf-8');
const escribirArchivo = (ruta, string)  => fs.promises.writeFile(ruta, string);

const random = (min, max) => Math.random()*(max-min) + min;

app.get('/items', async(req, res)=>{
    let productos = [];
    leerArchivo(rutaProductos)
        .then((prods)=>{
            productos = JSON.parse(prods);
            return leerArchivo(rutaVisitas)
        })
        .then((vis)=>{
            visitas = JSON.parse(vis);
            visitas.visitas.items += 1;
            console.log(visitas);
            return escribirArchivo(rutaVisitas, JSON.stringify(visitas));
        })
        .then(()=>{
            res.send({"items": productos, "cantidad": productos.length});
        })
        .catch((error)=>{
            res.send({"error": error})
        })
})

app.get('/item-random', (req, res)=>{
    let productos = [];
    let index = 0;
    leerArchivo(rutaProductos)
    .then((prods)=>{
        productos = JSON.parse(prods);
        index = Math.floor( random(0, productos.length) );
        return leerArchivo(rutaVisitas)
    })
    .then((vis)=>{
        visitas = JSON.parse(vis);
        visitas.visitas.item += 1;
        console.log(visitas);
        return escribirArchivo(rutaVisitas, JSON.stringify(visitas));
    })
    .then(()=>{
        res.send({"item": productos[index]});
    })
    .catch((error)=>{
        res.send({"error":error})
    })
})

app.get('/visitas', (req, res)=>{

    leerArchivo(rutaVisitas)
    .then((visitas)=>{
        res.send(JSON.parse(visitas))
    })
    .catch((error)=>{
        res.send({"error":error})
    })
})

app.listen(PORT, ()=>{
    console.log(`Escuchando en el Puerto: ${PORT}`);
});