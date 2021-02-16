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
    },
    {
        "id": 6,
        "title": "Infinity Guantlet",
        "price": 6,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/01_-_Thanos_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
    }

]

// products = [];

class ApiClass{
	constructor(){ }

	async get(req, res){
        if (!products.length) res.sendStatus(404).json({"error" : 'no hay productos cargados'});
		res.send(products);
    }
    
    async getById(req, res){
        let product = products.find((product)=>product.id == req.params.id);
        if (!product) res.sendStatus(404).json({"error" : `producto ${req.params.id} no encontrado`});
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
}

module.exports = ApiClass;