use ecommerce

db.createCollection("mensajes")

db.createCollection("productos")

db.mensajes.insertMany([
	{
        "sender": "juangmouribe@yahoo.es",
        "time": "2021-03-01T17:46:14.060Z",
        "message": "Hola joven\n"
    },
    {
        "sender": "andurmon@gmail.com",
        "time": "2021-03-01T17:46:20.883Z",
        "message": "Hola guillermo"
    },
    {
        "sender": "andurmon@gmail.com",
        "time": "2021-03-01T17:46:32.872Z",
        "message": "Como estas?"
    },
    {
        "sender": "juangmouribe@yahoo.es",
        "time": "2021-03-01T17:46:37.175Z",
        "message": "Que pasaaaaaa"
    },
    {
        "sender": "andurmon@gmail.com",
        "time": "2021-03-01T17:46:44.406Z",
        "message": "Very well"
    },
    {
        "sender": "andurmon@gmail.com",
        "time": "2021-03-01T17:46:54.240Z",
        "message": "How are you?"
    },
    {
        "sender": "juangmouribe@yahoo.es",
        "time": "2021-03-01T17:46:59.066Z",
        "message": "Tenes hambruna???? "
    },
    {
        "sender": "andurmon@gmail.com",
        "time": "2021-03-01T17:47:03.911Z",
        "message": "Yes"
    },
    {
        "sender": "andurmon@gmail.com",
        "time": "2021-03-01T17:47:10.006Z",
        "message": "No me dejen en visto"
    },
    {
        "sender": "juangmouribe@yahoo.es",
        "time": "2021-03-01T17:47:22.970Z",
        "message": "visto"
    }
])

db.productos.insertMany([
	 {
        "title": "Daredevil Mask",
        "price": 120,
        "thumbnail": "https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Daredevil-256.png"
    },
    {
        "title": "Spider-Man Mask",
        "price": 580,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_spiderman_marvel_spider_man-256.png"
    },
    {
        "title": "Iron Man Mask",
        "price": 3000,
        "thumbnail": "https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-14-256.png"
    },
    {
        "title": "Black Panther suit",
        "price": 900,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/diversity-avatars-vol-3/64/black-panther-comic-superhero-256.png"
    },
    {
        "title": "Hulk Smash",
        "price": 1280,
        "thumbnail": "https://cdn1.iconfinder.com/data/icons/UltraBuuf/256/HULKfist.png"
    },
    {
        "title": "Infinity Guantlet",
        "price": 1700,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/01_-_Thanos_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
    },
    {
        "title": "Storm Breaker",
        "price": 2300,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/10_-_THOR_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero_-_weapon-256.png"
    },
    {
        "title": "Caps Shield",
        "price": 2860,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/apps-3/128/Marvel_COC.png"
    },
    {
        "title": "Leviathan Axe",
        "price": 3350,
        "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/81XkQK4XRmL._SL1500_.jpg"
    },
    {
        "title": "Baby groot",
        "price": 4320,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/geek-3/24/Baby_Groot_guardians_of_galaxy_marvel_movie-256.png"
    }
])



db.mensajes.find()
db.productos.find()



db.mensajes.count()
db.productos.count()


db.productos.insertOne({
    "title": "Arc Reactor",
    "price": 4999,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/geek-3/24/Iron_Man_avenger_arc_reactor_movie_marvel-256.png"
})

db.productos.find(
	{
		"price": {
			$lt: 1000
		}
	}, 
	{
		"title": 1,
		"price": 1
	}
)

db.productos.find(
	{
		$and: [{"price": {$gte: 1000}},{"price": {$lte: 3000}}]
	}, 
	{
		"title": 1,
		"price": 1
	}
)

db.productos.find(
	{
		"price": {
			$gt: 3000
		}
	}, 
	{
		"title": 1,
		"price": 1
	}
)

db.productos.find({}).sort({"price":1}).skip(2).limit(1).pretty()


db.productos.updateMany({}, {$set: {"stock": 100}})

db.productos.updateMany({"price": {$gt: 4000}}, {$set: {"stock": 0}})

db.productos.deleteMany({"price": {$lt: 1000}})


db.createUser({
	user: "pepe",
	pwd: "asd456",
	roles: [
		{role: "read", db: "ecommerce"}
	]
})