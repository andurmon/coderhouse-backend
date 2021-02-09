let products = [
    {
        "id": 1,
        "title": "Daredevil Mask",
        "price": 100000,
        "thumbnail": "https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Daredevil-256.png"
    },
    {
        "id": 2,
        "title": "Spider-Man Mask",
        "price": 500000,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_spiderman_marvel_spider_man-256.png"
    },
    {
        "id": 3,
        "title": "Iron Man Mask",
        "price": 3000,
        "thumbnail": "https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-14-256.png"
    },
    {
        "id": 4,
        "title":"Black Panther suit",
        "price": 220000,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/diversity-avatars-vol-3/64/black-panther-comic-superhero-256.png"
    },
    {
        "id": 5,
        "title":"Hulk Smash",
        "price": 600000,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/UltraBuuf/256/HULKfist.png"
    }

]

// products = [];

class ApiClass{
	constructor(){ }

	async get(req, res){
        if (!products.length) res.status(404).send({"error" : 'no hay productos cargados'});
		res.send(products);
    }
    
    async getById(req, res){
        let product = products.find((product)=>product.id == req.params.id);
        if (!product) res.status(404).send({"error" : `producto ${req.params.id} no encontrado`});
        res.send(product);
	}

	async post(req, res){
        let newProduct = req.body;
        let ids = products.map(product => {
            return product.id;
        })
        
        newProduct.id = Math.max(...ids) + 1;

        products.push(req.body);
        res.json(req.body)
    }

    async put(req, res){
        let productBody = req.body;
        let product = await products.find((product)=>product.id == req.params.id);
        if (!product) res.status(404).send({"error" : `producto ${req.params.id} no encontrado`});

        product.title = productBody.title;
        product.price = productBody.price;
        product.thumbnail = productBody.thumbnail;

        res.json(product)
    }

    async delete(req, res){
        let product = await products.find((product)=>product.id == req.params.id);
        if (!product) res.status(404).send({"error" : `producto ${req.params.id} no encontrado`});

        let index = products.indexOf(product);
        products.splice(index, 1);

        console.log(product);
        res.send(product)
    }
}

module.exports = ApiClass;