const lista = [{"id":1,"title":"Daredevil Mask","price":100000,"thumbnail":"https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Daredevil-256.png"},{"id":2,"title":"Spider-Man Mask","price":500000,"thumbnail":"https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_spiderman_marvel_spider_man-256.png"},{"id":3,"title":"Iron Man Mask","price":3000,"thumbnail":"https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-14-256.png"},{"id":4,"title":"Black Panther suit","price":220000,"thumbnail":"https://cdn2.iconfinder.com/data/icons/diversity-avatars-vol-3/64/black-panther-comic-superhero-256.png"},{"id":5,"title":"Hulk Smash","price":600000,"thumbnail":"https://cdn1.iconfinder.com/data/icons/UltraBuuf/256/HULKfist.png"},{"id":6,"title":"Infinity Guantlet","price":6,"thumbnail":"https://cdn2.iconfinder.com/data/icons/avengers-filled/48/01_-_Thanos_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"},{"id":7,"title":"Storm Breaker","price":9844,"thumbnail":"https://cdn2.iconfinder.com/data/icons/avengers-filled/48/10_-_THOR_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero_-_weapon-256.png"},{"id":8,"title":"Caps Shield","price":9844,"thumbnail":"https://cdn2.iconfinder.com/data/icons/apps-3/128/Marvel_COC.png"},{"title":"Leviathan Axe","price":"654","thumbnail":"https://images-na.ssl-images-amazon.com/images/I/81XkQK4XRmL._SL1500_.jpg","id":9},{"title":"awesome mix","price":"6548","thumbnail":"https://geekociety.files.wordpress.com/2014/10/geekociety-awesomemix-2.jpg","id":10},{"title":"Mi Awesome Mix","price":"12314","thumbnail":"https://geekociety.files.wordpress.com/2014/10/geekociety-awesomemix-2.jpg","id":11}]
const random = (min, max) => Math.floor( Math.random()*(max-min) + min);

const PORT = 8000 || process.env.PORT;

const app  = require("express")();
const http = require("http").createServer(app);

const io = require("socket.io")(http);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket)=>{
    socket.emit("socketId", socket.id);
    console.log("Se conecto un usuario con ID: ", socket.id);
    let num = 0;
    let id = setInterval(()=>{
        num = random(0,lista.length);
        socket.emit("Mensaje inclusivo del servidor", lista[num]);
    }, 3000);
    
    socket.on("Mensaje del chat", (mensaje)=>{
        console.log(`${socket.id} dijo ==> ${mensaje}`);
        io.emit("Mensaje del chat", {socketId: socket.id, mensaje: mensaje})
    })
})

io.on('disconnect', ()=>{
    console.log("Se desconecto :(");
})

http.listen( PORT, ()=>{
    console.log(`Connected on port ${PORT}`);
})