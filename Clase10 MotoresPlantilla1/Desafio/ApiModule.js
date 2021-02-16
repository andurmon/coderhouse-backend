// let products = [
//     {
//         "id": 1,
//         "title": "Daredevil Mask",
//         "price": 100000,
//         "thumbnail": "https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Daredevil-256.png"
//     },
//     {
//         "id": 2,
//         "title": "Spider-Man Mask",
//         "price": 500000,
//         "thumbnail": "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_spiderman_marvel_spider_man-256.png"
//     },
//     {
//         "id": 3,
//         "title": "Iron Man Mask",
//         "price": 3000,
//         "thumbnail": "https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-14-256.png"
//     },
//     {
//         "id": 4,
//         "title":"Black Panther suit",
//         "price": 220000,
//         "thumbnail": "https://cdn2.iconfinder.com/data/icons/diversity-avatars-vol-3/64/black-panther-comic-superhero-256.png"
//     },
//     {
//         "id": 5,
//         "title":"Hulk Smash",
//         "price": 600000,
//         "thumbnail": "https://cdn1.iconfinder.com/data/icons/UltraBuuf/256/HULKfist.png"
//     },
//     {
//         "id": 6,
//         "title": "Infinity Guantlet",
//         "price": 6,
//         "thumbnail": "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/01_-_Thanos_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
//     },
//     {
//         "id": 7,
//         "title": "Storm Breaker",
//         "price": 9844,
//         "thumbnail": "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/10_-_THOR_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero_-_weapon-256.png"
//     },
//     {
//         "id": 8,
//         "title": "Caps Shield",
//         "price": 9844,
//         "thumbnail": "https://cdn2.iconfinder.com/data/icons/apps-3/128/Marvel_COC.png"
//     }
// ]

// products = [];

// File System y Random
const fs = require("fs");
const leerArchivo = ruta  => fs.promises.readFile(ruta, 'utf-8');

function getProductos(){
    return new Promise((resolve, reject)=>{
        fs.promises.readFile(rutaProductos, 'utf-8')
            .then((prods)=>{
                var products = JSON.parse(prods);
                if (!products.length) reject({"error" : 'no hay productos cargados'});
                resolve(products)
            }).catch((error)=>{
                reject({"error": error})
            })
    })
}

function escribirArchivo(productos){
    fs.promises.writeFile(rutaProductos, JSON.stringify(productos));
}
const rutaProductos = "./data/productos.txt";

class ApiClass{
	constructor(){ }

	async get(req, res){
        getProductos()
        .then( products => res.json(products))
        .catch(e => res.send(e));
    }
    
    async getById(req, res){
        getProductos()
        .then( products => {
            let product = products.find((product)=>product.id == req.params.id);
            if (!product) res.status(404).send({"error" : `producto ${req.params.id} no encontrado`});
            res.json(product);
        })
        .catch(e => res.send(e));
	}

	async post(req, res){
        let newProduct = req.body;

        getProductos()
        .then( products => {
            let ids = products.map(product => {
                return product.id;
            })
            newProduct.id = Math.max(...ids) + 1;
            products.push(newProduct);

            escribirArchivo(products);
            res.json(newProduct);
        })
        .catch(e => res.send(e));
    }

    async put(req, res){
        let productBody = req.body;

        getProductos()
        .then( products => {
            let product = products.find((product)=>product.id == req.params.id);
            if (!product) res.status(404).send({"error" : `producto ${req.params.id} no encontrado`});
    
            product.title = productBody.title;
            product.price = productBody.price;
            product.thumbnail = productBody.thumbnail;
            
            escribirArchivo(products);
            res.json(product)
        })
        .catch(e => res.send(e));
    }

    async delete(req, res){
        getProductos()
        .then( products => {
            let product = products.find((product)=>product.id == req.params.id);
            if (!product) res.status(404).send({"error" : `producto ${req.params.id} no encontrado`});

            let index = products.indexOf(product);
            products.splice(index, 1);

            escribirArchivo(products);
            res.send(product)
        })
        .catch(e => res.send(e));
    }
}

module.exports = ApiClass;